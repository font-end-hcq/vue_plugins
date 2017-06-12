<template>
<section class='mm-course-tab'>
  <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
    <tab defaultColor='#333' activeColor='#333' :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item :disabled='!item' class="vux-center"  v-for="(item, index) in course" :key="index">{{item.name}}</tab-item>
    </tab>
  </div>
  <swiper v-model="index" :show-dots="false" id='my-swiper'>
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <div class="tab-swiper vux-center">
        <mm-course-list v-if='item.message' v-for='it in item.message' :message='it' />
        <load-more v-if='!item.message'></load-more>
        <div v-else-if='!item.count' class='nomessage'>
          <img src="//xbinstitute.oss-cn-hangzhou.aliyuncs.com/shield/mobile/plugin-pic/none.png" alt="">
          <span>这里什么都没有，去别的地方看看吧~</span>
        </div>
      </div>
    </swiper-item>
  </swiper>
</section>
</template>

<script>
import {
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  LoadMore
} from 'vux';


import MmCourseList from '../course-lists'
import os from 'object-serialize'
import 'whatwg-fetch'

export default {
  name: 'mm-course-simple-tab',
  data() {
    return {
      index: 0,
      swiperList: [],
      course: [{
        name:'即将开课'
      },{
        name:'已结课'
      }],
      pageCount: 10,
      courses: [],
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    MmCourseList,
    LoadMore,
  },
  methods: {
    getList(ind = 0, pageNum = 1) {
      const type = this.courses[ind]['data'];
      let body = {
        pageNum,
        pageCount: this.pageCount,
      }
      if (type) {
        Object.assign(body, {
          [type]: this.courses[ind][type],
        })
      }

      let canshu = {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: os(body)
      }
      return new Promise((resolve, reject) => {
        //http://localhost:6060
        const requestHead = this.requestHead || '';
        fetch(`${requestHead}/api/course/all`, canshu).then(resp => resp.json()).then(re => {
          resolve(re.data);
          this.courses[ind].page = pageNum;
        }).catch(()=>{
          reject();
        })
      })
    },
    listFunc(val = 0) {
      const {
        page = 0, count = 0
      } = this.courses[val];
      if ((page - 1) * this.pageCount > count) {
        return;
      }
      let sl = this.swiperList[val];
      this.getList(val, this.courses[val].page).then(data => {
        let message = [];
        if (data.count) {
          message = data.list;
        }

        sl.count = data.count;
        sl.page = this.courses[val].page + 1;
        const t = [].push.apply(sl.message || [], data.list)
        sl.message = sl.message || data.list;
      },()=>{
          sl.message = [{
            title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
            category:'营销影响',
            buy_count:100,
            // score:10.0,
            // scoreType:'pingjia',
            scoreType:'yipingjia',
            next:this.$route.path + 10+'/',
            cover_240x140:'',
          }]
      }).then(()=>{
          this.$set(this.swiperList, val, this.swiperList[val]);
      })
    },
  },

  props: ['tags', 'pageCounts', 'requestHead'],

  mounted() {
    this.pageCount = +this.pageCounts || 10;
  },
  created() {
    this.swiperList = this.course;
    this.courses =this.course;

    this.listFunc();
  },
  watch: {
    index: function(val) {
      this.listFunc(val);
      const div = document.querySelector('.mm-course-tab >div');
      let left = div.scrollLeft;
      const to = document.body.scrollWidth * 0.24 * (val - 1);
      const si = setInterval(function() {
        if (left < to) {
          div.scrollLeft = left++;
        } else if (left > to) {
          div.scrollLeft = left--;
        } else {
          clearInterval(si);
        }
      }, 2);
    }
  }
}
</script>

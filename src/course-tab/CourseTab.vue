<template>
<section class='mm-course-tab'>
  <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
    <tab defaultColor='#333' activeColor='#333' :style="{width:width}" :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item :disabled='!item' class="vux-center" :selected="selected === item" v-for="(item, index) in course" :key="index">{{item.name}}</tab-item>
    </tab>
  </div>
  <swiper v-model="index" :show-dots="false" id='my-swiper'>
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <div class="tab-swiper vux-center">
        <mm-course-list v-if='item.message' v-for='it in item.message' :message='it' :key='it'/>
        <load-more v-if='!item.message'></load-more>
        <div v-else-if='!item.count' class='nomessage'>
          <img src="//xbinstitute.oss-cn-hangzhou.aliyuncs.com/shield/image/plugin-pic/none.png" alt="">
          <span>这里什么都没有，去别的地方看看吧~</span>
        </div>
      </div>
    </swiper-item>
  </swiper>
  <em class='ifshowall' @click='showallType=!showallType'></em>
  <div class="all" v-if='showallType'>全部分类</div>
  <div class="alllist" :class='{showallType:showallType}'>
    <dl>
      <dd v-for='(item,ind) in courses' :class='{on:ind===index}' @click='selectType(ind)'>{{item.name}}</dd>
    </dl>
  </div>
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
  name: 'mm-course-tab',
  data() {
    return {
      selected: '全部课程',
      index: 0,
      width: 0,
      showallType: false,
      swiperList: [],
      course: [],
      pageCount: 10,
      courses: [],
      si:null,
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
    selectType(ind) {
      this.index = ind;
      this.showallType = false;
    },
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
        }).catch(()=>reject())
      })
    },
    setWidth() {
      this.width = document.body.scrollWidth * 0.24 * this.swiperList.length + 'px';
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

      },()=>sl.message = {}).then(()=>this.$set(this.swiperList, val, this.swiperList[val]))
    },
  },

  props: ['tags', 'pageCounts', 'requestHead'],

  mounted() {
    this.pageCount = +this.pageCounts || 10;
    this.setWidth();
    document.getElementById('my-swiper').addEventListener('touchend', () => {
      const scroll = window.screen.height + document.querySelectorAll('#my-swiper .vux-swiper-item')[this.index].scrollTop - document.querySelectorAll('#my-swiper .vux-swiper-item')[this.index].scrollHeight;
      if (scroll >= -100) {
        this.listFunc(this.index);
      }
    })
  },
  created() {
    let {
      type = ['vip'], category = ['测', '试', '代', '码']
    } = this.tags;
    // ||{
    //   category:[1,2,3],
    //   type:'vip'
    // };

    var mycourse = [{
      name: '全部课程',
    }];
    for (let name of type) {
      mycourse.push({
        name,
        type: name,
        data: 'type'
      })
    }

    for (let name of category) {
      mycourse.push({
        name,
        category: name,
        data: 'category'
      })
    }
    this.courses = mycourse;
    this.swiperList = mycourse;

    this.course = [...this.swiperList, ''];
    this.listFunc();
    document.body.onresize = () => this.setWidth();
  },
  watch: {
    index: function(val) {
      this.listFunc(val);
      const div = document.querySelector('.mm-course-tab >div');
      let left = div.scrollLeft.toFixed(0);
      const to = document.body.scrollWidth * 0.24 * (val - 1).toFixed(0);
      clearInterval(this.si);
      if(left < to){
        this.si = setInterval(()=> {
            div.scrollLeft = left++;
            if(left >= to){
              clearInterval(this.si);
            }
        }, 2);
      }else if(left>to){
        this.si = setInterval(()=> {
            div.scrollLeft = left--;
            if(left <= to){
              clearInterval(this.si);
            }
        }, 2);
      }
      // this.si = setInterval(()=> {
      //   if (left < to) {
      //     div.scrollLeft = left++;
      //   } else if (left > to) {
      //     div.scrollLeft = left--;
      //   } else {
      //     clearInterval(this.si);
      //   }
      // }, 2);
    }
  }
}
</script>

<template>
<section class='mm-course-tab'>
  <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
    <tab defaultColor='#333' activeColor='#DC2832' :line-width=2  v-model="index">
      <tab-item :disabled='!item' class="vux-center"  v-for="(item, index) in course" :key="index" :selected='index==preIndex'>{{item.name}}</tab-item>
    </tab>
  </div>
  <swiper v-model="index" :show-dots="false" id='my-swiper'>
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <div class="tab-swiper vux-center">
        <mm-course-list v-if='item.message' v-for='it in item.message' :pingjia='pingjia'  :message='it' :key='it' :to='"course_detl?courseId="+it._id' />
        <load-more v-if='!item.message'></load-more>
        <div v-else-if='!item.count' class='nomessage'>
          <img src="//xbinstitute.oss-cn-hangzhou.aliyuncs.com/shield/image/plugin-pic/none.png" alt="">
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
      pingjia:false,
      preIndex:sessionStorage.preIndex||0,
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
    getList(over) {
      let canshu = {
        credentials: 'include',
        method:'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:`over=${over}`,
      }
      return new Promise((resolve, reject) => {
        fetch(`/api/user/course`, canshu)
        // .then(re=console.log(re)).catch(()=>console.log(9))
        .then(resp => resp.json()).then(({data={}}) => {
          const {list=[]} = data;
          if(list.length){
              resolve(data);
          }else{
              reject();
          }
          // this.courses[ind].page = pageNum;
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
      this.getList(val).then(data => {
        let message = [];
        // console.log(data)
        message = data.list;
        // const t = [].push.apply(sl.message || [], data)
        // sl.message = sl.message || data;
        sl.message = message;
        sl.count = message.length;
        this.pingjia = !!val;
        // console.log(1,message)
      },()=>{
          sl.message = [];
          sl.count = 0;
      }).then(()=>{
          this.$set(this.swiperList, val, this.swiperList[val]);
      })
    },
  },

  destroyed() {
    // sessionStorage.preIndex = 0;
  },
  created() {
    this.swiperList = this.course;
    this.courses =this.course;

    this.listFunc();
  },
  watch: {
    index: function(val) {
      this.listFunc(val);
      sessionStorage.preIndex = val;
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

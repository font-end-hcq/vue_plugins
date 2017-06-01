<template>
<section class='mm-course-tab'>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      <tab
      defaultColor='#333'
      activeColor='#333'
      :style="{width:width}" :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item :disabled='!item' class="vux-center" :selected="selected === item" v-for="(item, index) in course"  :key="index">{{item.name}}</tab-item>
      </tab>
    </div>
    <swiper v-model="index" :show-dots="false">
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <div class="tab-swiper vux-center" >
            <mm-course-list v-if='item.message' :message='item.message'></mm-course-list>
            <div v-else class='nomessage'>
                <img src="//xbinstitute.oss-cn-hangzhou.aliyuncs.com/shield/plugin-pic/none.png" alt="">
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
  SwiperItem
} from 'vux';


import CourseList from '../course-lists'

export default {
  name: 'mm-course-tab',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    CourseList,
  },
  props:['courses'],
  methods:{
    selectType(ind){
      this.index = ind;
      this.showallType = false;
    },
    getList(ind=0){
      // Object.assign(this.swiperList[ind],{message:{
      //   title:'203期 节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生节日活动狙击式招生',
      //   theme:'营销影响',
      //   learned:100,
      //   img:'',
      // }});
    }
  },
  data() {
    return {
      selected: '全部课程',
      index: 0,
      width: 0,
      showallType:false,
      swiperList:null,
      course:[],
      // courses:[{
      //   name:'全部课程',
      //   type:'1',
      // },{
      //   name:'美食',
      //   type:'2',
      // },{
      //   name:'电影',
      //   type:'3',
      // },{
      //   name:'酒店',
      //   type:'4',
      // },{
      //   name:'外卖',
      //   type:'5',
      // }]
    }
  },
  created(){
      this.swiperList = this.courses;
      this.course =  [...this.swiperList,''];
      this.width = document.body.scrollWidth * 0.24 * this.swiperList.length + 'px';
      this.getList();
  },
  watch:{
    index:function(val) {
        this.getList(val);
    }
  }
}
</script>

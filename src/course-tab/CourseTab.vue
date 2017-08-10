<template>
<section class='mm-course-tab'>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
        <tab defaultColor='#666' activeColor='#dc2832' :style="{width}" :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item :disabled='!item' class="vux-center" :selected="selected === item" v-for="(item, index) in course" :key="index">{{item.name}}</tab-item>
        </tab>
    </div>
    <swiper v-model="index" :show-dots="false" id='my-swiper' :min-moving-distance='minMovingDistance'>
        <swiper-item v-for="(item, index) in swiperList" :key="index">
            <div class="tab-swiper vux-center">
                <scroller :height='platform==="Win32"?"auto":scrollsHeight' lock-x :lock-y='lock' @on-scroll-bottom="onScrollBottom" @on-scroll='onScroll' ref="scrollerBottom" :scroll-bottom-offst="200">
                    <div>
                        <mm-course-list v-if='item.message' v-for='it in item.message' :message='it' :key='it' :to='"course_detl?courseId="+it._id' />
                        <load-more tip="loading" v-if='!item.message'></load-more>
                        <div v-else-if='!item.count' class='nomessage'>
                            <img src="https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/none.png" alt="">
                            <span>这里什么都没有，去别的地方看看吧~</span>
                        </div>
                        <div class="weui-loadmore weui-loadmore_line" v-else-if='item.message&&item.message.length===item.count'>
                            <span class="weui-loadmore__tips">已经到底了</span>
                        </div>
                    </div>
                </scroller>
            </div>
        </swiper-item>
    </swiper>
    <em class='ifshowall' @click='showallType=!showallType'><i  :class='{on:showallType}'></i></em>
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
    LoadMore,
    Scroller
} from 'vux'


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
            si: null,
            bottomCount: 20,
            onFetching: false,
            scrollsHeight:(window.innerHeight - window.innerWidth*0.25)+'px',
            lock:false,
            platform:navigator.platform,
        }
    },
    components: {
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        MmCourseList,
        LoadMore,
        Scroller,
        scrollTop:0,
    },
    methods: {
        onScrollBottom() {
            if (!this.onFetching) {
                this.onFetching = true;
                this.$refs.scrollerBottom[this.index].reset()
                this.listFunc(this.index)
            }
          },
        onScroll({top=0}){
            if(!this.lock){
                this.scrollTop = top;
            }
        },

        selectType(ind) {
            this.index = ind;
            this.showallType = false;
        },
        getList(ind = 0, pageNum = 1) {
            const type = this.courses[ind]['data'];
            this.pageCount = +this.pageCounts || 10;

            let body = {
                pageNum,
                pageCount: this.pageCount,
            }

            if (typeof Object.assign != 'function') {
                Object.assign = function(target) {
                  'use strict';
                  if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                  }

                  target = Object(target);
                  for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                      for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                          target[key] = source[key];
                        }
                      }
                    }
                  }
                  return target;
                };
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
                const requestHead = this.requestHead || '';
                fetch(`${requestHead}/api/course/all`, canshu).then(resp => resp.json()).then(re => {
                    resolve(re.data);
                    this.courses[ind].page = pageNum;
                }).catch(() => reject())
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
                }, () => sl.message = {}).then(() => {
                    this.$set(this.swiperList, val, this.swiperList[val]);
                    this.$refs.scrollerBottom[this.index].reset();
                    this.onFetching = false
                }).then(()=>{
                    if(this.platform==="Win32"){
                      this.onScrollBottom();
                    }
                })

        },
    },

    props: ['tags', 'pageCounts', 'requestHead','min-moving-distance'],

    mounted() {
        this.setWidth();
        let screenX;
        document.body.addEventListener('touchstart',e=>{
            screenX = e.targetTouches[0].screenX;
        })

        document.body.addEventListener('touchmove',e=>{
          if(Math.abs(screenX - e.targetTouches[0].screenX)>50){
              this.lock = true;
              this.$refs.scrollerBottom[this.index].reset({
                top: this.scrollTop,
              })
          }
        })

        document.body.addEventListener('touchend',e=>{
            this.lock = false;
            this.$refs.scrollerBottom[this.index].reset()
        })
    },
    created() {
        let {
            type = ['vip'], category = ['测', '试', '代', '码']
        } = this.tags;

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
            if (left < to) {
                this.si = setInterval(() => {
                    div.scrollLeft = left++;
                    if (left >= to) {
                        clearInterval(this.si);
                    }
                }, 2);
            } else if (left > to) {
                this.si = setInterval(() => {
                    div.scrollLeft = left--;
                    if (left <= to) {
                        clearInterval(this.si);
                    }
                }, 2);
            }
        }
    }
}
</script>

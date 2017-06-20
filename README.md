## 按需加载
> 依赖 `babel-plugin-component`


## 学习项目,不建议应用于生产环境

`.babelrc`
```
"plugins": [["component", [
  {
    "libraryName": "mm_vue_plugins",
    "style":true,
  }
]]]
```
> 使用

```
import {CourseLists,MainMenu,BottomMenu,CourseTab,SaveDialog,CourseSimpleTab,RateStar,ConfirmX} from 'mm_vue_plugins'
Vue.use(SaveDialog);//mm-save-dialog
Vue.use(CourseTab);//mm-course-tab
Vue.use(CourseSimpleTab);//mm-course-simple-tab
Vue.use(CourseLists);//mm-course-list
Vue.use(MainMenu);//mm-main-menu
Vue.use(BottomMenu);//mm-bottom-menu
Vue.use(TopBack);//mm-top-back
Vue.use(RateStar);//mm-rate-star
Vue.use(ConfirmX);//mm-confirm-x
```
### `mm-confirm-x`
> 0.5.0 add

```
<mm-confirm-x v-on:next='test' v-on:close='test'
:message='confirm.message'
:closeText='"放弃支付"'
:nextText='"重新支付"'
:show='confirm.show'
/>
---
#### test
this.confirm = Object.assign({},this.confirm,{
  show:false
})
```
### `mm-rate-star`
> 0.4.0 add

```
<mm-rate-star starts='5' >project-name</mm-rate-star>
<mm-rate-star result='3'>项目名称</mm-rate-star>
```
- starts 打分中用,默认为5个星星
- result 显示分数
### `mm-course-simple-tab`
> 0.3.0 add

```
  <mm-course-simple-tab  pageCounts='10'/>
```

### `mm-save-dialog`
> 0.2.0 add

```
  <mm-save-dialog :time='time' v-on:result='result'/>
```
- time 倒计时时间,不写为3
- result 倒计时结束回调

### `mm-top-back`
> 0.1.0 add

```
<mm-top-back color='#fff' backcolor='blue' bgcolor='red'>首页</mm-top-back>
```
- color 文字颜色
- backcolor 返回箭头颜色,无则取color
- bgcolor 背景颜色
### `mm-bottom-menu`
```
<mm-bottom-menu type='2'/>
```
### `mm-course-tab`
`<mm-course-tab :courses='courses'></mm-course-tab>`
```
courses:[{
  name:'全部课程',
  type:'1',
},{
  name:'美食',
  type:'2',
},{
  name:'电影',
  type:'3',
},{
  name:'酒店',
  type:'4',
},{
  name:'外卖',
  type:'5',
  message:{
    title:'标题',
    theme:'主题',
    learned:100,//学习次数
  }
}]
```

### `mm-course-list`

`<mm-course-list :message='message'></mm-course-list>`

```
message:{
  title:'标题',
  theme:'主题',
  learned:100,//学习次数
  rate:10.0,//评分
}
```

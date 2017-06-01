## 按需加载
> 依赖 `babel-plugin-component`

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
import {CourseLists,MainMenu,BottomMenu,CourseTab} from 'mm_vue_plugins'
Vue.use(CourseTab);//mm-course-list
Vue.use(CourseLists);//mm-course-list
Vue.use(MainMenu);//mm-main-menu
Vue.use(BottomMenu);//mm-bottom-menu
Vue.use(TopBack);//mm-top-back
```
### `mm-top-back`
> 0.1.0 add

```
<mm-top-back color='#fff' backcolor='blue' bgcolor='red'>首页</mm-top-back>
```
- color 文字颜色
- backcolor 返回箭头颜色,无则取color
- bgcolor 背景颜色

### `mm-course-tab`
```
import {CourseTab} from 'mm-vue-plugins'
Vue.use(CourseTab)
```

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

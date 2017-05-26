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
import {CourseLists,MainMenu,BottomMenu} from 'mm_vue_plugins'
Vue.use(CourseLists);//mm-course-list
Vue.use(MainMenu);//mm-main-menu
Vue.use(BottomMenu);//mm-bottom-menu
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

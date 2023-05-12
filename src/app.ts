import { createApp } from 'vue'
import { ImagePreview, OverLay, Popup, Swiper, SwiperItem, Cell, Icon, Input, Button, Tabbar, TabbarItem } from '@nutui/nutui-taro';
import Common from './components/Common.vue'
import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(ImagePreview)
  .use(OverLay)
  .use(Popup)
  .use(Swiper)
  .use(SwiperItem)
  .use(Cell)
  .use(Icon)
  .use(Input)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)

App.component('Common', Common)

export default App

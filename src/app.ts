import { createApp } from 'vue'
import { ImagePreview, OverLay, Popup, Swiper, SwiperItem, Cell, Icon } from '@nutui/nutui-taro';

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

export default App

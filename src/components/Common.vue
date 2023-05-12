<template>
  <div>
    <div>{{text}}</div>
    <nut-input/>
    <nut-button @click="toDetail">跳转详情页</nut-button>
    <div class="tabbar">
      <nut-tabbar v-model:visible="activeName" @tab-switch="tabSwitch">
        <nut-tabbar-item v-for="(item, index) in list" :name="item.pagePath" :tab-title="item.text"> </nut-tabbar-item>
      </nut-tabbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Taro, { useDidShow } from '@tarojs/taro'
import { defineProps, ref } from 'vue'
import { usePage } from '../hooks/usePage'

defineProps<{
  text: string
}>()

const toDetail = ()=> {
  Taro.navigateTo({
    url: '/subpkg-1/goods/index'
  })
}

const { activeName, loaded, list } = usePage()

useDidShow(() => {
  if (!loaded.value) {
    console.log(activeName.value, loaded.value, list.value)
    const pageObj = Taro.getCurrentInstance()
    list.value = pageObj.app.config.tabBar.list
    activeName.value = list.value[0].pagePath
    loaded.value = true
  }
})

const tabSwitch = (item, path)=> {
  Taro.switchTab({
    url: `/${path}`
  })
}
useDidShow(() => {
  const pageObj = Taro.getCurrentInstance()
  console.log(pageObj.app.config.tabBar.list)
})

</script>
<style lang="scss">
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

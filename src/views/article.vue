<template>
  <div>article</div>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  // console.log(to, from)
})

onBeforeRouteLeave((to, from) => {
  // 弹出一个确认框
  const confirmText = '确认要离开吗？您的更改尚未保存！'
  const isConfirmLeave = window.confirm(confirmText)

  // 当用户点取消时，不离开路由
  if (!isConfirmLeave) {
    return false
  }
})
</script>

<style scoped></style>

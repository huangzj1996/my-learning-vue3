<template>
  <div class="home">
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <p ref="p">{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from '@cp/HelloWorld.vue'

import { ref, onMounted } from 'vue'

// import logo from '@img/logo.png'
const msg = ref<string>()
const msg1 = ref('321')
const msg2 = ref()
const p = ref<HTMLElement>()
msg.value = '4321'
console.log(msg.value, msg1.value, typeof msg2.value)
onMounted(() => {
  console.log(p.value?.innerHTML)
})
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-black;
  padding: (@margin * 3) 0;
  margin: 0 auto;
}
</style>

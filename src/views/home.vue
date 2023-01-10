<template>
  <div class="home">
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" ref="hello" /> -->
    <!-- <p ref="p">{{ msg }}</p> -->
    <div>{{ fullName }}</div>
    <p>{{ userInfo.name }}</p>
    <!-- <p>{{ name }}</p> -->
    <Child>
      <template #title> 标题 </template>
      <template #author> <div>作者</div> </template>
      <div>内容</div>
    </Child>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from '@cp/HelloWorld.vue'
import Child from './child.vue'
import type { ComputedRef } from 'vue'
import {
  ref,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
  watchEffect,
  computed,
} from 'vue'

// import logo from '@img/logo.png'
// const msg = ref<string>('')
// let index = 0
// const msg1 = ref('321')
// const msg2 = ref()
// const p = ref<HTMLElement>()
// const hello = ref<typeof HelloWorld>()
// msg.value = '4321'
// console.log(msg.value, msg1.value, typeof msg2.value)
// setTimeout(() => {
//   msg.value = 'hello vue3'
// }, 2000)
// watch(
//   msg,
//   () => {
//     console.log('改变后的msg', msg, index)
//     index++
//   },
//   { immediate: true }
// )

// 单独定义两个数据，后面用来分开改变数值
// const name = ref<string>('Petter')
// const age = ref<number>(18)

// // 定义一个调用这两个数据的函数
// const getUserInfo = (): void => {
//   console.log({
//     name: name.value,
//     age: age.value,
//   })
// }

// // 2s后改变第一个数据
// setTimeout(() => {
//   name.value = 'Tom'
// }, 2000)

// // 4s后改变第二个数据
// setTimeout(() => {
//   age.value = 20
// }, 4000)

// // 直接侦听调用函数，在每个数据产生变化的时候，它都会自动执行
// watchEffect(getUserInfo)
// 声明对象的格式
interface Member {
  id: number
  name: string
  age?: number
}

// 定义一个对象数组
const memberList = ref<Member[]>([
  {
    id: 1,
    name: 'Tom',
  },
  {
    id: 2,
    name: 'Petter',
  },
])

onMounted(() => {
  // console.log(p.value, hello)
})

// 定义一个对象
const userInfo: Member = reactive({
  id: 1,
  name: 'Tom',
})
// 这个变量在 2s 后不会再同步更新
// const { name } = userInfo
// const name = toRef(userInfo, 'name')
// const age = toRef(userInfo, 'age', 222)
// console.log(name.value) // Petter
// console.log(age.value) // Petter
// console.log(userInfo.age) // Petter
// age.value = 234
// console.log(age.value) // Petter
// console.log(userInfo.age) // Pettere
setTimeout(() => {
  userInfo.name = 'per'
}, 2000)
// setTimeout(() => {
//   name.value = 'perw'
// }, 4000)
// watch(userInfo, () => {
//   console.log('侦听整个 userInfo ', userInfo.name)
// })

// watch(
//   () => userInfo.name,
//   (newValue, oldValue) => {
//     console.log('只侦听 name 的变化 ', userInfo.name)
//     console.log('打印变化前后的值', { oldValue, newValue })
//   }
// )

// const nums = ref<number[]>([])

// setTimeout(() => {
//   nums.value.push(1)
//   console.log('修改后', nums.value)
// }, 2000)

// watch(
//   nums,
//   () => {
//     console.log(nums)
//   },
//   { deep: false }
// )
// const words = reactive(['a', 'b', 'c'])
// const wordsRefs = toRefs(words)
// console.log(wordsRefs)

// 读取用户名
// console.log(userInfo.name)

// // 修改用户名
// userInfo.name = 'Petter'
// userInfo.id = 2

// let uids: number[] = reactive([1, 2, 3])

// /**
//  * 不推荐使用这种方式，会丢失响应性
//  * 异步添加数据后，模板不会响应更新
//  */
// // uids = []
// // 使用这个方式
// uids.length = 0
// // 异步获取数据后，模板依然是空数组
// setTimeout(() => {
//   uids.push(1)
// }, 500)

const firstName = ref<string>('Bill')
const lastName = ref<string>('Gates')

// 定义需要计算拼接结果的数据
const fullName: ComputedRef<string> = computed(
  () => `${firstName.value} ${lastName.value}`
)

// 2s 后改变某个数据的值
setTimeout(() => {
  firstName.value = 'Petter'
}, 2000)
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

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { websiteTitle } from '@/config'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  // console.log('跳转完成前', to)
  if (to.name === undefined && to.matched.length === 0) {
    console.log(1)
    return '/'
  }
})

router.afterEach((to, from, failure) => {
  // console.log('跳转完成后', to, from, failure)

  const { title } = to.meta
  document.title = title ? `${title} - ${websiteTitle}` : websiteTitle
})

export default router

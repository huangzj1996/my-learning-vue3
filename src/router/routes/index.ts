import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@views/article.vue'),
  },
  /**
   * 子路由示例
   */
  {
    path: '/foo',
    name: 'foo',
    component: () =>
      import(/* webpackChunkName: "foo" */ '@cp/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: () => {
      return '/bar'
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
    ],
  },
  // 配置一个404路由
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import(/* webpackChunkName: "404" */ '@views/404.vue'),
  //   meta: {
  //     title: '404',
  //   },
  // },
]

export default routes

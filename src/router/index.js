import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'
import Layout from '../layout/layout.vue'
import Product from '../views/product/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Login,
    },
    // 菜单的路由
    {
      name: 'home',
      component: Layout,
      redirect: '/home',
      meta:{breadcrumb: '首页'},
      children: [
        { path: '/home', name: 'home', component: Home },
        { path: '/product', name: 'product', component: Product, meta:{breadcrumb: '产品列表'} },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

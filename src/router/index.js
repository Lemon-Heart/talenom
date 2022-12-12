import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import closeDropdownMenu from './middleware/closeDropdownMenu'
import middlewarePipeline from '@/_core/router/middlewarePipeline'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from) {
    if (to.name !== from.name) document.getElementById('app').scrollIntoView()
  }
})

router.beforeEach((to, from, next) => {
  let middleware = [closeDropdownMenu]
  if (to.meta.middleware) middleware = middleware.concat(Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware])
  if (!middleware.length) return next()

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1)
  })
})

export default router

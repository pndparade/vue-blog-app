import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import BlogLayout from '@/layouts/BlogLayout.vue'
import PostLayout from '@/layouts/PostLayout.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogView,
      meta: {
        layout: BlogLayout
      }
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: () => import('../views/PostView.vue'),
      meta: {
        layout: PostLayout
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router

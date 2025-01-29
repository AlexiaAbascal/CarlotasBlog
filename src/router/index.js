import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import PatternView from '@/views/PatternView.vue';
import RecipesView from '@/views/RecipesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/patterns',
      name: 'patterns',
      component: PatternView,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView,
    }
  ],
})

export default router

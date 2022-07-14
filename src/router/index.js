import {createRouter, createWebHashHistory} from 'vue-router';
import home from '@/pages/home.vue';
import analyzeApp from '@/pages/analyze-app.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: analyzeApp,
      // children: [   **Deliverables[3]**
      //   {
      //     path: 'market',
      //     component: analyzeApp,
      //   },
      //   {
      //     path: 'competitive',
      //     component: analyzeApp,
      //   },
      // ],
    },
  ],
});

export default router;

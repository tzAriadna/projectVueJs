import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Monitoring',
    component: () => import('../components/Monitoring.vue')
  },
  {
    path: '/settings',
    name: 'SettingWidget',
    component: () => import('../components/SettingWidget.vue')
  },
  {
    path: '/addinfo',
    name: 'AddInfo',
    component: () => import('../components/AddInfo.vue')
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('../components/Authorization.vue')
  },
  {
    path: '/connected_devices',
    name: 'ConnectedDevices',
    component: () => import('../components/ConnectedDevices.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeResolve((to, from, next) => {
//   if (to.path) {
//     console.log('Загрузка');
//     const preloader = document.getElementById('preloader');
//     let loader = document.getElementById('loader');
//     preloader.style.display = 'block';
//     loader.style.display = 'block';
//   }
//   next();
// })

// router.afterEach(() => {
//   setTimeout(() => {
//     const preloader = document.getElementById('preloader');
//     let loader = document.getElementById('loader');
//     preloader.style.display = 'none';
//     loader.style.display = 'none';
//   }, 1000)
//   console.log('Готово');
// })

export default router

export const createrouter = [

  {
    path: '/',
    component: () => import('@/views/result/result.vue'),
    name: 'home',
    redirect: '/login',
    meta: {
      title: '首页',
      icon: 'UserFilled',
      hidden: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/result/result.vue'),
    name: 'login',
    meta: {
      title: '登录',
      icon: 'Position',
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/result/result.vue'),
    name: '404',
    meta: {
      title: '错误了',
      icon: 'DeleteFilled',
      hidden: true
    },
  },
]
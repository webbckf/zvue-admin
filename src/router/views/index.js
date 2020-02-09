import Layout from '@/page/index/'
export default [{
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/page/home')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/views/info/index')
    }, {
        path: 'message',
        name: '消息中心',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/views/info/message')
    }]
}]
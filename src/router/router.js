/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 */
import Router from 'vue-router';

import PageRouter from './page/'
import ViewsRouter from './views/'
import ZvueRouter from './zvue-router';
import Store from '../store/';

const router = new Router({
  // 记录滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.$keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [...PageRouter, ...ViewsRouter]
})

ZvueRouter.install(router, Store);

// 处理菜单
router.$zvueRouter.formatRoutes(Store.state.user.menuAll, true);
/* 
export function resetRouter () {
  const newRouter = createRouter()
  Router.matcher = newRouter.matcher // reset router
  ZvueRouter.install(Router, Store);
} */
export default router;
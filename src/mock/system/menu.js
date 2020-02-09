import Mock from 'mockjs'

/**
 * 
 * 动态模拟菜单
 * 
 * label菜单的名字
 * path菜单的路径
 * icon菜单的图标（系统采用的阿里巴巴图表库）
 * compnent组件的地址
 * children子类菜单数组
 * group配置其他路由激活菜单高亮
 */

var top = [{
  label: "首页",
  href: "/wel/index",
  icon: 'el-icon-menu',
  parentId: 0
},
{
  label: "设置",
  icon: 'el-icon-setting',
  href: '/dev/index',
  parentId: 1
},
{
  label: "博客",
  icon: 'el-icon-document',
  href: "http://zhangjianling.com",
  parentId: 3
}]
const first = [{
  id: 2,
  label: "第三方网站",
  path: '/url',
  icon: 'icon-wangzhan',
  meta: {},
  children: [{
    id: 3,
    label: "百度",
    path: 'https://www.baidu.com',
    icon: 'icon-jigouguanli',
    children: [],
  }]
}]
const second = [{
  id: 9,
  label: "系统管理",
  path: '/system',
  icon: 'icon-xitongguanli',
  children: [{
    id: 20,
    label: "用户管理",
    path: 'user',
    component: 'views/system/user',
    icon: 'icon-yonghuguanli',
    children: []
  }, {
    id: 21,
    label: "角色管理",
    path: 'role',
    component: 'views/admin/role/index',
    icon: 'icon-jiaoseguanli',
    children: []
  }
  ]
},{
  id: 23,
  label: "环境变量",
  icon: 'icon-bianliangguanlizu',
  path: '/dev',
  component: 'views/dev/index',
  meta: {

  },
  children: []
}]
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first, second];
  Mock.mock('/user/getMenu', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    }
  })
  Mock.mock('/user/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })
}


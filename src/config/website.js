/**
 * 全局配置文件
 */
export default {
    title: "",
    logo: "",
    indexTitle: '前端通用开发框架',
    lockPage: '/lock',
    tokenTime: 1000,
    info: {
        title: "前端通用开发框架",
        list: [
            '是一个基于vue+vuex+vue-router快速后台管理模板，采用token交互验证方式。',
            '不只限制于vue的页面，你可以嵌入第三方网站，基于iframe框架。',
            '构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。',
        ]
    },
    tenantMode: true, // 是否开启租户模式
    //http的status默认放行的状态码,
    statusWhiteList: [400],
    //配置首页不可关闭
    isFirstPage: false,
    fistPage: {
        label: "首页",
        value: "/wel/index",
        params: {},
        query: {},
        group: [],
        close: false
    },
    //配置菜单的属性
    menu: {
        props: {
            label: 'label',
            path: 'path',
            icon: 'icon',
            children: 'children'
        }
    }
}
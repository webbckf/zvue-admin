import Mock from 'mockjs'
export default ({ mock }) => {
    if (!mock) return;
    // 重置密码
    Mock.mock('/user/resetPassword', 'post', {
        data: new Date().getTime() + ''
    });
    // 用户登录
    Mock.mock('/user/login', 'post', {
        data: new Date().getTime() + ''
    });
    //用户退出
    Mock.mock('/user/logout', 'get', {
        data: true,
    });
    //刷新token
    Mock.mock('/user/refesh', 'post', {
        data: new Date().getTime() + ''
    });
    // 用户详情
     Mock.mock('/user/detail?id=1123598821738675201', 'get', {
        data: {"id":"1123598821738675201","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2018-08-08 00:00:00","updateUser":"1123598821738675201","updateTime":"2018-08-08 00:00:00","status":1,"isDeleted":0,"tenantId":"000000","account":"admin","password":"90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad","name":"管理员","realName":"管理员","avatar":"https://portrait.gitee.com/uploads/avatars/user/6/19835_zhangjl_1578915289.png!avatar30","email":"web_bckf@126.com","phone":"123333333333","birthday":"2018-08-08 00:00:00","sex":1,"roleId":"1123598816738675201","deptId":"1123598813738675201","roleName":"超级管理员","deptName":"公司","sexName":"男"}
    });

    //获取用户信息
    Mock.mock('/user/getUserInfo', 'get', {
        data: {
            userInfo: {
                id: 1,
                username: 'admin',
                name: '思维空间',
                realName: '张建玲',
                phone: 15393106234,
                email:'web_bckf@126.com',
                avatar: 'https://portrait.gitee.com/uploads/avatars/user/6/19835_zhangjl_1578915289.png!avatar30',
            },
            roles: 'admin',
            permission: [
                'sys_crud_btn_add',
                'sys_crud_btn_export',
                'sys_menu_btn_add',
                'sys_menu_btn_edit',
                'sys_menu_btn_del',
                'sys_role_btn1',
                'sys_role_btn2',
                'sys_role_btn3',
                'sys_role_btn4',
                'sys_role_btn5',
                'sys_role_btn6',
            ], //权限级别
        }
    });

    

    //获取表格数据
    Mock.mock('/user/list?current=1&size=10', 'get', {
        data: {"records":[{"id":"1123598821738675201","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2018-08-08 00:00:00","updateUser":"1123598821738675201","updateTime":"2018-08-08 00:00:00","status":1,"isDeleted":0,"tenantId":"000000","account":"admin","password":"90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad","name":"管理员","realName":"管理员","avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png","email":"zhangjl","phone":"123333333333","birthday":"2018-08-08 00:00:00","sex":1,"roleId":"1123598816738675201","deptId":"1123598813738675201","roleName":"超级管理员","deptName":"软件事业部","sexName":"男"},{"id":"1123598821738675202","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2019-04-27 17:03:10","updateUser":"1123598821738675201","updateTime":"2019-04-27 17:03:10","status":1,"isDeleted":0,"tenantId":"000000","account":"hr","password":"5e79b90f7bba52d54115f086e48f539016a27ec6","name":"人事","realName":"人事","avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png","email":"hr@bladex.vip","phone":"123333333333","birthday":"2018-08-08 00:00:00","sex":1,"roleId":"1123598816738675203","deptId":"1152441346162114562","roleName":"人事","deptName":"产品部","sexName":"男"},{"id":"1123598821738675203","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2019-04-27 17:03:38","updateUser":"1123598821738675201","updateTime":"2019-04-27 17:03:38","status":1,"isDeleted":0,"tenantId":"000000","account":"manager","password":"dfbaa3b61caa3a319f463cc165085aa8c822d2ce","name":"经理","realName":"经理","avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png","email":"manager@bladex.vip","phone":"123333333333","birthday":"2018-08-08 00:00:00","sex":1,"roleId":"1123598816738675204","deptId":"1152441274775060481","roleName":"经理","deptName":"研发部","sexName":"男"},{"id":"1123598821738675204","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2019-04-27 17:03:55","updateUser":"1123598821738675201","updateTime":"2019-04-27 17:03:55","status":1,"isDeleted":0,"tenantId":"000000","account":"boss","password":"abe57d23e18f7ad8ea99c86e430c90a05119a9d3","name":"老板","realName":"老板","avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png","email":"boss@bladex.vip","phone":"123333333333","birthday":"2018-08-08 00:00:00","sex":1,"roleId":"1123598816738675205","deptId":"1123598813738675202","roleName":"老板","deptName":"常州刀锋","sexName":"男"}],"total":4,"size":10,"current":1,"orders":[],"searchCount":true,"pages":1}
    })
}
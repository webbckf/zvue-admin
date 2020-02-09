/**
 * 用户接口库
 * @author zhangjl
 */

import ajax from '@/axios/axios'

// 用户登录
export const LoginByUsername = (username, password, code, redomStr) => ajax({
    url: '/user/login',
    method: 'post',
    data: {
        username,
        password,
        code,
        redomStr
    }
})

// 刷新tocken
export const refeshToken = () => ajax({
    url: '/user/refesh',
    method: 'post'
})
  
// 退出
export const logout = () => ajax({
    url: '/user/logout',
    method: 'get'
})

// 获取用户信息
export const getUserInfo = () => ajax({
    url: '/user/getUserInfo',
    method: 'get'
});

// 获取列表
export const getList = (current, size, params) => {
    return ajax({
        url: '/user/list',
        method: 'get',
        params: {
            ...params,
            current,
            size,
        }
    })
}

// 删除用户
export const remove = (ids) => {
    return ajax({
        url: '/user/remove',
        method: 'post',
        params: {
            ids,
        }
    })
}

// 新增用户
export const add = (row) => {
    return ajax({
        url: '/user/add',
        method: 'post',
        data: row
    })
}

// 更新用户
export const update = (row) => {
    return ajax({
        url: '/user/update',
        method: 'post',
        data: row
    })
}

// 用户详情
export const getUser = (id) => {
    return ajax({
        url: '/user/detail',
        method: 'get',
        params: {
            id,
        }
    })
}

// 重置密码
export const resetPassword = (obj) => {
    return ajax({
        url: '/user/detail',
        method: 'get',
        data: obj,
    })
}

// 获取顶部菜单
export const getTopMenu = () => { 
    return ajax({
        url: '/user/getTopMenu',
        method: 'get'
    })
};

export const getMenu = (type = 0) => ajax({
    url: '/user/getMenu',
    method: 'get',
    data: {
        type
    }
});
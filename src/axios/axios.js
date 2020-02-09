/**
 * axios统一封装
 *
 * header参数说明
 * serialize是否开启form表单提交
 * isToken是否需要token
 * 
 * @author zhangjl
 */
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/'
import router from '@/router/router'
import { serialize } from '@/util/util'
import { getToken } from '@/util/auth'
import website from '@/config/website'

// 状态码错误信息
const codeMessage = {
    '200': '操作成功',
    '500': '服务器发生错误，请检查服务器',
    '000': '操作太频繁，请勿重复请求',
    '400': '请求错误',
    '401': '用户登录超时',
    '403': '当前操作没有权限',
    '404': '资源不存在',
    '417': '未绑定登录账号，请使用密码登录后绑定',
    '423': '演示环境不能操作，如需了解联系波波',
    '426': '用户名不存在或密码错误',
    '428': '验证码错误,请重新输入',
    '429': '请求过频繁',
    '479': '演示环境，没有权限操作',
    'default': '系统未知错误,请反馈给管理员'
}

// 启动请求超时时间
axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function(status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// 进度条配置
NProgress.configure({
    showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(config => {
    NProgress.start()
    const isToken = (config.data || {}).isToken === false
    if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    //headers中配置serialize为true开启序列化
    if (config.methods === 'post' && config.headers.serialize) {
        config.data = serialize(config.data);
        delete config.data.serialize;
    }
    return config
}, error => {
    return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
    NProgress.done();
    const status = Number(res.status) || 200;
    const statusWhiteList = website.statusWhiteList || [];
    const message = codeMessage[status] || '未知错误';
    //如果请求为200则放过，否者默认统一处理,或者在website中配置statusWhiteList白名单自行处理
    if (status !== 200 && !statusWhiteList.includes(status)) {
        Message({
            message,
            type: 'error'
        })
        return Promise.reject(new Error(message))
    }
    //如果是401则跳转到登录页面
    if (status === 401) { 
        MessageBox({
            title: '提示',
            message: codeMessage[status],
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            showCancelButton: true,
            type: 'warning',
            callback: (action) => {
              if(action === 'confirm') location.reload()
            }
          })
        store.dispatch('fedLogOut').then(() => router.push({ path: '/login' }));
    }
    // 如果是白名单类型放入catch自行处理
    if (status !== 200) return Promise.reject(res);
    return res;
}, error => {
    console.log(error);
    NProgress.done();
    return Promise.reject(new Error(error));
})

export default axios;
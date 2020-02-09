/**
 * 租户接口库
 * @author zhangjl
 */
import ajax from 'mockjs'

export const getTenant = (page) => ajax({
    url: '/tenant/select',
    method: 'get',
    data: { page }
})
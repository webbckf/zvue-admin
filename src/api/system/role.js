/**
 * 角色接口库
 * @author zhangjl
 */
import ajax from '@/axios/axios'

/**
 * 角色树
 * @param {租户id} tenantId 
 */
export const getRoleTree = (tenantId) => {
    return ajax({
      url: '/role/tree',
      method: 'get',
      params: {
        tenantId,
      }
    })
}
  
export const getUserData = (page) => ajax({
    url: '/admin/getUser',
    method: 'get',
    data: { page }
})

export const getRoleData = (page) => ajax({
    url: '/admin/getRole',
    method: 'get',
    data: { page }
})



export const getDic = (type) => ajax({
    url: '/admin/getDic',
    method: 'get',
    data: {
        type
    }
})
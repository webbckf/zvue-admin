/**
 * 部门管理模块接口库
 * @author zhangjl
 */
import ajax from '@/axios/axios'

export const getDeptTree = (tenantId) => {
    return ajax({
      url: '/dept/tree',
      method: 'get',
      params: {
        tenantId,
      }
    })
  }
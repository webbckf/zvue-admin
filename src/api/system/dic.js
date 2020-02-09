/**
 * 字典模块接口库
 * @author zhangjl
 */
import ajax from '@/axios/axios'

/**
 * 字典
 * @param {租户id} tenantId 
 */
export const getDic = (tenantId) => {
    return ajax({
      url: '/role/tree',
      method: 'get',
      params: {
        tenantId,
      }
    })
  }
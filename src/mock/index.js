import admin from './system/admin'
import dept from './system/dept'
import menu from './system/menu'
import role from './system/role'
import user from './system/user'
import tenant from './system/tenant'

/**
 * 模拟数据mock
 * 
 * mock是否开启模拟数据拦截
 */

user({ mock: true });

dept({ mock: true });

role({ mock: true });

menu({ mock: true });

admin({ mock: true });

tenant({ mock: true });
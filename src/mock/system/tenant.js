import Mock from 'mockjs'

const depts = [{"id":"1123598820738675201","createUser":"1123598821738675201","createDept":"1123598813738675201","createTime":"2019-01-01 00:00:39","updateUser":"1123598821738675201","updateTime":"2019-01-01 00:00:39","status":1,"isDeleted":0,"tenantId":"000000","tenantName":"管理组","domain":"http://saber.bladex.vip","backgroundUrl":"https://saber.bladex.vip/img/bg/bg.jpg","linkman":"admin","contactNumber":"666666","address":"管理组","accountNumber":2333,"expireTime":"2099-01-01 00:00:00"}]
export default ({ mock }) => {
    if (!mock) return;
    Mock.mock('/tenant/select', 'get', () => {
        return {
            data: depts
        }
    })
}
import Mock from 'mockjs'

const deptList = [{
	"id": "1123598813738675201",
	"parentId": "0",
	"children": [{
		"id": "1123598813738675202",
		"parentId": "1123598813738675201",
		"children": [{
			"id": "1152441274775060481",
			"parentId": "1123598813738675202",
			"children": [{
				"id": "1152441505113653250",
				"parentId": "1152441274775060481",
				"hasChildren": false,
				"title": "电子政务项目组",
				"key": "1152441505113653250",
				"value": "1152441505113653250"
			}, {
				"id": "1152441586571231234",
				"parentId": "1152441274775060481",
				"hasChildren": false,
				"title": "工商项目组",
				"key": "1152441586571231234",
				"value": "1152441586571231234"
			}],
			"hasChildren": true,
			"title": "研发部",
			"key": "1152441274775060481",
			"value": "1152441274775060481"
		}, {
			"id": "1152441346162114562",
			"parentId": "1123598813738675202",
			"hasChildren": false,
			"title": "UED部门",
			"key": "1152441346162114562",
			"value": "1152441346162114562"
		}],
		"hasChildren": true,
		"title": "软件事业部",
		"key": "1123598813738675202",
		"value": "1123598813738675202"
	}, {
		"id": "1123598813738675203",
		"parentId": "1123598813738675201",
		"hasChildren": false,
		"title": "商务部",
		"key": "1123598813738675203",
		"value": "1123598813738675203"
	}],
	"hasChildren": true,
	"title": "公司",
	"key": "1123598813738675201",
	"value": "1123598813738675201"
}]
export default ({ mock }) => {
    if (!mock) return;
    Mock.mock('/dept/tree', 'get', () => {
        return {
            data: deptList
        }
    })
}
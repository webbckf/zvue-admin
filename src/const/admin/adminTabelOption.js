import {
  DIC
} from '@/const/dic'
export const userOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  selection: false,
  menuBtn: true,
  menuAlign: 'left',
  dicData: DIC,
  column: [{
    label: "用户名",
    prop: "username",
    width: "150",
    fixed: true,
    rules: [{
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    }]
  },
  {
    label: "角色",
    prop: "grade",
    type: "checkbox",
    dicData: 'GRADE'
  },
  {
    label: "创建时间",
    prop: "date",
    type: "datetime",
    format: "yyyy-MM-dd HH:mm:ss",
    valueFormat: "yyyy-MM-dd HH:mm:ss",
  },
  {
    label: "内容",
    prop: "ueditor",
    type: "ueditor",
    formHeight: 'auto',
    hide: true,
    span: 24,
  },
  {
    label: "状态",
    prop: "state",
    slot: true,
    type: "radio",
    dicData: 'STATE'
  }
  ]
};
export const roleOption = {
  addBtn: true, // 是否展示新增按钮
  excelBtn: true,
  // title:'表格的标题',
  border: true, //是否增加表单边框
  index: true, //是否展示索引
  selection: false, // 是否有复选框
  searchMenuSpan: 8,
  size: 'small', //
  emptyText: '自定义暂无数据提示语',
  // height:10,
  column: [{
    label: "角色名称",
    prop: "name",
    width: "150",
    fixed: true,
    searchValue:'',
    search: true,
    formatter:function(row, value , label, column){ // 自定义显示列单元格内容
      return value +'自定义'
    },
    rules: [{
      required: true,
      message: "角色名称",
      trigger: "blur"
    }]
  },
  {
    label: "性别",
    prop: "sex",
    width:80,
    filter: true,
    type:'select',
    dicData:[
      {
        label:'男',
        value:1
      },{
        label:'女',
        value:0
      }
    ],
    filterMethod:function(value, row, column) {
                return row.sex === value;
              }
  },
  {
    label: "创建时间",
    prop: "date",
    format: "yyyy-MM-dd HH:mm:ss",
    valueFormat: "yyyy-MM-dd HH:mm:ss",
    type: "date",
  }
  ]
};
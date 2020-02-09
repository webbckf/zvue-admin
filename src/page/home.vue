<template>
  <div>
    <!-- <basic-container>
      <h3>首页</h3>
    </basic-container>-->
    <basic-container>
      <avue-data-icons :option="easyDataOption2"></avue-data-icons>
    </basic-container>
    <!--  <basic-container>
      <avue-data-box :option="easyDataOption"></avue-data-box>
    </basic-container>-->
    <basic-container>
      <avue-echart-line :option="option" :data="data1" width="100%" height="300"></avue-echart-line>
    </basic-container>
    <basic-container>
      <avue-crud :data="data" :option="tableOption">
        <template slot-scope="scope" slot="username">
          <el-tag>{{scope.row.username}}</el-tag>
        </template>
        <template slot-scope="scope" slot="stars">
          <a :href="scope.row.git" target="_blank">
            <img :src="scope.row.stars" alt="star" />
          </a>
        </template>
        <template slot-scope="scope" slot="address">
          <a :href="scope.row.git" target="_blank">{{scope.row.address}}</a>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      theme:'2',
      data1: {
        categories: [
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
          "星期日"
        ],
        series: [
          {
            name: "总数据",
            data: [
              1000879,
              678564,
              897744,
              439087,
              478900,
              238900,
              390877
            ]
          }, {
            name: "错误数据",
            data: [
              2000879,
              678564,
              897744,
              439087,
              339087,
              478900,
              390877
            ]
          },
          {
            name: "正确数据",
            data: [
              10000,
              678564,
              897744,
              439087,
              478900,
              478200,
              390877
            ]
          }
        ]
      },
      option: {
        title: '数据传输情况统计',
        titleShow: true,
        gridX:80,
        xAxisSplitLineShow: false,
        smooth: true,//是否顺滑
        barColor:[
          {
            "color1": "#c12e34",
          },
          {
            "color1": "#e6b600",
          },
          {
            "color1": "#0098d9",
          },
          {
            "color1": "#2b821d",
          },
          {
            "color1": "#005eaa",
          }
        ],
        areaStyle: true//是否面积
        
      },
      tableOption: {
        border: true,
        index: true,
        expand: true,
        stripe: true,
        selection: true,
        page: false,
        menuBtn: true,
        menuAlign: "center",
        align: "center",
        column: [
          {
            label: "用户名",
            prop: "username",
            width: 120,
            span: 24,
            slot: true,
            sortable: true,
            rules: [
              {
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "类型",
            prop: "type",
            width: 80,
            type: "select",
            sortable: true,
            dicData: [
              {
                label: "前端",
                value: 0
              },
              {
                label: "后端",
                value: 1
              }
            ]
          },
          {
            label: "stars",
            width: "150",
            prop: "stars",
            sortable: true,
            slot: true
          },
          {
            label: "码云",
            slot: true,
            span: 24,
            prop: "address",
            type: "textarea",
            overHidden: true
          },
          {
            label: "项目介绍",
            width: "300",
            prop: "info",
            editDisabled: true,
            formHeight: 200,
            type: "ueditor",
            span: 24,
            overHidden: true
          }
        ]
      },
      data: [
        {
          username: "lengleng",
          name: "lengleng",
          number: 12,
          type: "0",
          stars: "12",
          git: ".。。。",
          address: "。。。。",
          info:
            "主要内容 "
        },
        {
          username: "zhangjl",
          name: "思维空间",
          number: 20,
          type: "1",
          stars:
            "0",
          git: ".。。。",
          address: "。。。。",
          info:
            ""
        }
      ],
      easyDataOption2: {
        // color: 'rgb(63, 161, 255)',
        span: 6,
        discount: true,
        data: [
          {
            title: "上传总数",
            icon: "el-icon-tickets",
            count: 22139
          },
          {
            title: "正确条数",
            icon: "el-icon-success",
            count: 22139
          },
          {
            title: "错误条数",
            icon: "el-icon-error",
            count: 22139
          },
          {
            title: "过时条数",
            icon: "el-icon-platform-eleme",
            count: 22139
          }
        ]
      },
      easyDataOption: {
        data: [
          {
            title: "总条数",
            count: 33333,
            icon: "icon-cuowu",
            color: "rgb(49, 180, 141)"
          },
          {
            title: "错误条数",
            count: 33,
            icon: "icon-shujuzhanshi2",
            color: "rgb(56, 161, 242)"
          },
          {
            title: "正确条数",
            count: 2223,
            icon: "icon-jiaoseguanli",
            color: "rgb(117, 56, 199)"
          }
        ]
      }
    };
  },
  computed: {},
  created () { },
  methods: {}
};
</script>

<style  lang="scss">
.data-icons .item {
  margin: 0;
}
.home-info {
  padding: 26px 0;
  .img-border {
    width: 64px;
    height: 65px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }
  .img-v {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 22px;
    height: 22px;
  }
  .img {
    border-radius: 5px;
    width: 64px;
    height: 64px;
    display: inline-block;
    overflow: hidden;
    img {
      display: block;
      max-width: none;
      height: 64px;
      opacity: 1;
      width: 64px;
      margin-left: 0px;
      margin-top: 0px;
    }
  }
  .user {
    margin-left: 20px;
    display: inline-block;
    color: rgb(153, 153, 153);
    vertical-align: middle;
  }
  .user-title {
    font-size: 18px;
    color: rgb(102, 102, 102);
    margin-right: 5px;
    display: inline-block;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .user-subtitle {
    display: inline-block;
    width: 40px;
    height: 16px;
    line-height: 16px;
    border-radius: 2px;
    padding: 0px 5px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    color: rgb(255, 44, 84);
    background-color: rgb(255, 242, 244);
    white-space: nowrap;
  }
  .user-item {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>

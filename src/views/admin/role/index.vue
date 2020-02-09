<template>
  <div>
    <basic-container>
      <avue-crud :option="tableOption"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :page="page"
                 ref="crud"
                 @refresh-change="refreshChange"
                 @row-save="handleSave"
                 @row-update="handleUpdate"
                 @row-del="handleDel"
                 :cell-style="cellStyle"
                 >
        <template slot="searchMenu">
          <el-button size="small" @click="handelClick">自定义按钮</el-button>
        </template>
        <template slot="menuRight">
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getRoleData } from '@/api/system/role'
import { roleOption } from "@/const/admin/adminTabelOption.js";
export default {
  name: "role",
  components: {},
  data () {
    return {
      tableOption: {}, //表格设置属性
      tableData: [], //表格的数据
      tablePage: 1,
      tableLoading: false,
      page: {
        total: 1, //总页数
        currentPage: 1, //当前页数
        pageSize: 10 //每页显示多少条
      }
    };
  },
  created () {
    //初始化数据格式
    this.tableOption = roleOption;
    this.handleList();
  },
  watch: {},
  mounted () { },
  computed: {
    ...mapGetters(["permission", "menuAll"])
  },
  props: [],
  methods: {
    /**
     * 自定义事件
     */
    handelClick(){
       this.$message({
          message: `自定义按钮事件`,
          type: 'success',
        });
    },
    /**
     * 刷新
     */
    refreshChange({page,searchForm}){
        this.$message({
          message: `当前的返回的分页对象${JSON.stringify(page)} 搜索表单对象${JSON.stringify(searchForm)}`,
          type: 'success',
        });
    },
    
    /**
     * 打开新增窗口
     *
     **/
    handleAdd () {
      this.$refs.crud.rowAdd();
    },
    /**
     * 获取数据
     **/
    handleList () {
      this.tableLoading = true;
      getRoleData({ page: `${this.tablePage}` })
        .then(res => {
          const data = res.data.data;
          setTimeout(() => {
            this.tableData = data.tableData;
            this.page = {
              total: data.total,
              pageSize: data.pageSize
            };
            this.tableLoading = false;
          }, 1000);
        });
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row, done) {
      this.tableData.push(row);
      this.$message({
        showClose: true,
        message: "添加成功",
        type: "success"
      });
      done();
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除序号为${row.name}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
        })
        .catch(() => { });
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate (row, index, done) {
      this.tableData.splice(index, 1, row);
      this.$message({
        showClose: true,
        message: "修改成功",
        type: "success"
      });
      done();
    },
    cellStyle({row, column, rowIndex, columnIndex}){
        if(columnIndex==3){
          if(row.date>new Date()){
            return {
              color:'green',
              fontWeight:'bold',
              fontSize:'20'
            }
          }else{
            return {
              color:'red',
              fontWeight:'bold',
              fontSize:'20'
            }
          }
        }
      }
  }
};
</script>

<style lang="scss" scoped>
.table-container {
  padding: 8px 10px;
}
</style>

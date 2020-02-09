<template>
  <div>
    <el-input size="small" placeholder="输入关键字进行过滤"  v-model="filterText"></el-input>
    <el-tree
      class="filter-tree"
      node-key="id"
      :load='loadData' 
      :lazy='isLazy'
      @node-click="nodeClick"
      :props="props"
      :filter-node-method="filterNode"
      ref="tree"
    ></el-tree>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: () => {
        return []
      },
      type: Array
    },
    url: {
      default: '',
      type: String
    }
  },
  data(){
    return {
      isLazy: true,
      filterText: '',
      props: {
        children: 'children',
        label: 'title',
        id: 'id'
      }
    }
  },
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
  },
  methods: {
      loadData(node, resolve) {
        return resolve([{ title: '公司A', id:1 },{ title: '公司B', id:2 }]);
        // this.$emit('node-click',{node})
      },
      nodeClick(node) {
        this.$emit('node-click',{node})
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.title.indexOf(value) !== -1;
      }
  },
}
</script>

<style>
</style>
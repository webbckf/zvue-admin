<template>
  <div>
    <basic-container>
      <avue-tabs :option="option" v-model="form" @change="handleChange" @submit="handleSubmit"></avue-tabs>
    </basic-container>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/system/user";
import option from '@/const/info/form'
export default {
  data () {
    return {
      type: 'info',
      option: option,
      form: {},
    }
  },
  created () {
    this.handleWitch();
  },
  methods: {
    handleSubmit () {
      this.$message({
        message: this.form,
        type: "success"
      });
    },
    handleWitch () {
      if (this.type === 'info') {
        getUserInfo().then(res => {
          const { userInfo } = res.data.data;
          this.form = {
            id: userInfo.id,
            avatar: userInfo.avatar,
            name: userInfo.name,
            realName: userInfo.realName,
            phone: userInfo.phone,
            email: userInfo.email,
          }
        });
      } else if (this.type === 'password') {
        this.form = {
          oldPassword:'' ,
          newPassword:'' ,
          newPassword1:'' 
        }
      }
    },
    handleChange (item) {
      this.type = item.prop;
      this.handleWitch();
    },
  }
};
</script>

<style>
</style>

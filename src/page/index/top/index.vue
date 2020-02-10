<template>
  <div class="zvue-top">
    <div class="top-bar__left">
      <div class="zvue-breadcrumb"
           v-if="showCollapse">
        <i class="icon-daohang zvue-breadcrumb_collapse"
           :class="[{ 'zvue-breadcrumb_collapse--right': isCollapse }]"
           @click="setCollapse"></i>
      </div>
    </div>
    <h1 class="top-bar__title">
      <div class="top-bar__item top-bar__item--show"
           v-if="showMenu">
        <top-menu></top-menu>
      </div>
      <span class="top-bar__item"
            v-if="showSearch">
        <top-search></top-search>
      </span>
    </h1>
    <div class="top-bar__right">
      <el-tooltip v-if="showColor"
                  effect="dark"
                  content="主题色"
                  placement="bottom">
        <div class="top-bar__item">
          <top-color></top-color>
        </div>
      </el-tooltip>
      <el-tooltip v-if="showDebug"
                  effect="dark"
                  :content="logsFlag?'没有错误日志':`${logsLen}条错误日志`"
                  placement="bottom">
        <div class="top-bar__item">
          <top-logs></top-logs>
        </div>
      </el-tooltip>
      <el-tooltip v-if="showLock"
                  effect="dark"
                  content="锁屏"
                  placement="bottom">
        <div class="top-bar__item">
          <top-lock></top-lock>
        </div>
      </el-tooltip>
      <el-tooltip v-if="showTheme"
                  effect="dark"
                  content="主题"
                  placement="bottom">
        <div class="top-bar__item top-bar__item--show">
          <top-theme></top-theme>
        </div>
      </el-tooltip>
      <div class="top-bar__item">
        <top-msg></top-msg>
      </div>
      <el-tooltip effect="dark"
                  content="用户头像"
                  placement="bottom">
        <img class="top-bar__img"
             :src="userInfo.avatar">
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{userInfo.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/info/index">个人信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout"
                            divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { resetRouter } from '@/router/router'
import { fullscreenToggel, listenfullscreen } from "@/util/util";
import topLock from "./top-lock";
import topMenu from "./top-menu";
import topSearch from './top-search';
import topBreadcrumb from "./top-breadcrumb";
import topColor from "./top-color";
import topTheme from "./top-theme";
import topLogs from "./top-logs";
import topMsg from "./top-msg";
export default {
  components: { topLock, topMenu, topSearch, topBreadcrumb, topColor, topTheme, topLogs, topMsg },
  name: "top",
  data () {
    return {
      showDebug: true,
      showColor: true,     
      showTheme: true,
      showLock: true,
      showFullScren: true,
      showCollapse: true,
      showSearch: true,
      showMenu: true
    };
  },
  filters: {},
  created () { },
  mounted () {
    listenfullscreen(this.setScreen);
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "isFullScren",
      "home",
      "tagList",
      "isCollapse",
      "tag",
      "logsLen",
      "logsFlag"
    ]),
  },
  methods: {
    handleScreen () {
      fullscreenToggel();
    },
    setCollapse () {
      this.$store.commit("SET_COLLAPSE");
    },
    setScreen () {
      this.$store.commit("SET_FULLSCREN");
    },
    logout () {
      this.$confirm("是否退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("logOut").then(() => {
          // resetRouter();
          this.$router.push({ path: "/login" });
        });
      });
    }
  }
};
</script>

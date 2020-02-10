<template>
  <div class="zvue-logo">
    <transition name="fade">
      <span v-if="keyCollapse"
            class="zvue-logo_subtitle"
            key="0">
        {{website.logo}}
      </span>
    </transition>
    <img src="/img/logo.png" class="logo"/>
    <transition-group name="fade">
      <template v-if="!keyCollapse">
        
        <span class="zvue-logo_title"
              key="1">{{website.indexTitle}} </span>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "logo",
  data () {
    return {};
  },
  created () {
  },
  computed: {
    ...mapGetters(["website", 'keyCollapse'])
  },
  methods: {}
};
</script>

<style lang="scss">
.logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 16px;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.zvue-logo {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 220px;
  height: 60px;
  line-height: 60px;
  background-color: #20222a;
  font-size: 20px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  z-index: 1024;
  &_title {
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 16px;
  }
  &_subtitle {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
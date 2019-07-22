<template>
  <div id="app">
    <container>
      <router-view></router-view>
    </container>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "element-ui";
Vue.component(Button.name, Button);

import Loader from "./directives/loader";
Vue.directive("loading", Loader);

import Container from "./components/common/container.vue";

export default {
  name: "app",
  components: {
    Container
  }
};
</script>

<style lang="scss">
@import "~element-ui/packages/theme-chalk/lib/index.css";
@import "./style/index.scss";
</style>

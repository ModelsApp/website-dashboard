<template>
  <el-container>
    <el-aside width="240px">
      <aside-component />
    </el-aside>
    <el-container>
      <!--<el-header></el-header>-->
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from "vue";
import { Container, Header, Main, Aside } from "element-ui";
[Container, Header, Main, Aside].forEach(i => Vue.component(i.name, i));

import AsideComponent from "./aside/aside";

export default {
  name: "container",
  components: {
    AsideComponent
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  height: 100vh;
}
.el-container {
  min-height: 100%;
}
main.el-main {
  background: #f4f5f9;
  padding: 40px;
}
</style>

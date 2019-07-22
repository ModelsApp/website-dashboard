<template>
  <el-steps :active="active">
    <el-step></el-step>
    <el-step></el-step>
    <el-step></el-step>
  </el-steps>
</template>

<script>
import Vue from "vue";
import { Steps, Step } from "element-ui";
[Steps, Step].forEach(i => Vue.component(i.name, i));

export default {
  name: "createHeader",
  props: {
    active: {
      type: Number,
      required: true
    }
  }
};
</script>

<style type="scss"></style>

<template>
  <el-dialog :visible="isShow" :before-close="handleClose">
    <component :is="componentName" @close="handleClose" />
  </el-dialog>
</template>

<script>
import Vue from "vue";
import { Dialog } from "element-ui";
Vue.component(Dialog.name, Dialog);

export default {
  name: "dialogComponent",
  props: {
    componentName: {
      type: String,
      default: "",
      required: true
    },
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>

<style></style>

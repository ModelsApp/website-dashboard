<template>
  <el-dialog :visible="isActive" @close="close">
    isFinalStep
    <el-button type="primary" @click="close">Close</el-button>
  </el-dialog>
</template>

<script>
import Vue from "vue";
import { Dialog } from "element-ui";
[Dialog].forEach(i => Vue.component(i.name, i));

export default {
  name: "finalDialog",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>

<template>
  <el-date-picker v-model="valueLoc" @change="update" />
</template>

<script>
import Vue from "vue";
import { DatePicker } from "element-ui";
[DatePicker].forEach(i => Vue.component(i.name, i));

export default {
  name: "dateComponent",
  data() {
    return {
      valueLoc: ""
    };
  },
  props: {
    value: {
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("update", this.valueLoc);
    }
  },
  watch: {
    value: {
      handler: function(newVal) {
        this.valueLoc = newVal;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.el-date-editor .el-input__prefix {
  display: none;
}
.el-date-editor .el-input--prefix .el-input__inner {
  padding-left: 0;
}
</style>

<template>
  <el-input v-model="valueLoc" @change="update" :disabled="disabled" />
</template>

<script>
import Vue from "vue";
import { Input } from "element-ui";
[Input].forEach(i => Vue.component(i.name, i));

export default {
  name: "inputComponent",
  data() {
    return {
      valueLoc: ""
    };
  },
  props: {
    value: {
      required: true
    },
    disabled: {
      default: false,
      required: false
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

<style lang="scss"></style>

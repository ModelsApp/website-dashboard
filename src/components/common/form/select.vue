<template>
  <el-select v-model="valueLoc" @change="update">
    <el-option
      v-for="(option, index) in list"
      :key="`option-${option}-${index}`"
      :label="option"
      :value="option"
    >
    </el-option>
  </el-select>
</template>

<script>
import Vue from "vue";
import { Select, Option } from "element-ui";
[Select, Option].forEach(i => Vue.component(i.name, i));

export default {
  name: "selectComponent",
  data: () => {
    return {
      valueLoc: ""
    };
  },
  props: {
    value: {
      required: true
    },
    list: {
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

<style lang="scss"></style>

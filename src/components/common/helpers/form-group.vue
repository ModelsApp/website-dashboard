<template>
  <el-form-item :prop="name">
    <div class="group">
      <h3 class="primary-title">{{ title }}</h3>
      <component
        :is="`${inputType}-component`"
        :value="value"
        :list="list"
        :disabled="disabled"
        @update="update"
      />
    </div>
  </el-form-item>
</template>

<script>
import Vue from "vue";
import { FormItem, Form } from "element-ui";
[FormItem, Form].forEach(i => Vue.component(i.name, i));

import inputComponent from "@/components/common/form/input";
import selectComponent from "@/components/common/form/select";
import dateComponent from "@/components/common/form/date";

export default {
  name: "formGroup",
  methods: {
    update(val) {
      this.$emit("update", val);
    }
  },
  props: {
    value: {
      type: [Number, String, Array, Object, Date],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    list: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: false
    }
  },
  components: {
    inputComponent,
    selectComponent,
    dateComponent
  }
};
</script>

<style lang="scss">
@import "~@/style/var";
.el-input__inner {
  color: $color-2;
  font-family: "Circular Std Book", sans-serif;
  font-size: 20px;
  font-weight: 300;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(#979797, 0.3);
}
</style>

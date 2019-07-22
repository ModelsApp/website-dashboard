<template>
  <div class="create-footer">
    <el-button type="primary big" @click="confirm">Continue</el-button>
  </div>
</template>

<script>
export default {
  name: "createFooter",
  props: {},
  methods: {
    confirm() {
      this.$emit("confirm");
    }
  }
};
</script>

<style>
.create-footer {
  padding-top: 75px;
  display: flex;
  justify-content: flex-end;
}
</style>

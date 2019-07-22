<template>
  <div>
    <h2 class="cp-title">#1 Title</h2>
    <p class="cp-desc p">
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
      urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec
      sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at
      condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
      quis porttitor.
    </p>
    <hr class="hr" />
    <el-form ref="form" class="cp-dates-form">
      <form-group
        v-for="(formItem, index) in formItems"
        :key="`form-item-${index}`"
        input-type="input"
        :title="formItem.title"
        :disabled="true"
        :value="data[formItem.name]"
      />
    </el-form>
  </div>
</template>

<script>
import FormGroup from "@/components/common/helpers/form-group";

export default {
  name: "info",
  components: {
    FormGroup
  },
  data() {
    return {
      data: {
        available: "2019 - 04 - 05 / 2019 - 05 -05 ",
        startAt: "2019 - 05 - 05",
        uploadTo: "2019 - 05 - 05",
        uploadOn: "2019 - 05 - 05"
      },
      formItems: [
        { title: "AVAILABLE FROM / TILL:", name: "available" },
        { title: "START AT:", name: "startAt" },
        { title: "UPLOAD PICTURES TO:", name: "uploadTo" },
        { title: "UPLOAD PICTURES ON IG TO:", name: "uploadOn" }
      ]
    };
  }
};
</script>

<style lang="scss">
.cp-dates-form {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <el-upload
    class="upload-picture"
    :class="{
      'is-loaded': isLoaded,
      'is-loading': isLoading
    }"
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :limit="1"
    :on-change="handleProgress"
    :on-success="handleSuccess"
    :on-exceed="exceed"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <i class="upload-picture__plus">+</i>
  </el-upload>
</template>

<script>
import Vue from "vue";
import { Upload } from "element-ui";
[Upload].forEach(i => Vue.component(i.name, i));

export default {
  name: "pictureComponent",
  data() {
    return {
      isLoaded: false,
      isLoading: false
    };
  },
  methods: {
    handleProgress() {
      this.isLoading = true;
    },
    handleSuccess() {
      this.isLoaded = true;
      this.isLoading = false;
    },
    handleRemove(file, fileList) {
      setTimeout(() => {
        this.isLoaded = false;
        this.isLoading = false;
      }, 500);
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {},
    exceed() {
      console.log("exceed");
    }
  }
};
</script>

<style lang="scss">
.upload-picture {
  width: 168px;
  height: 163px;
  border-radius: 10px;
  /*border: 1px dashed #849daa;*/
  font-family: "Circular Std Book", sans-serif;

  background-image: linear-gradient(to right, #849daa 50%, transparent 50%),
    linear-gradient(to right, #849daa 50%, transparent 50%),
    linear-gradient(to bottom, #849daa 50%, transparent 50%),
    linear-gradient(to bottom, #849daa 50%, transparent 50%);
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 40px 1px, 40px 1px, 1px 40px, 1px 40px;
}
.upload-picture.is-loading .el-upload,
.upload-picture.is-loaded .el-upload {
  display: none;
}

.el-upload--picture-card {
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

i.upload-picture__plus {
  color: #849daa;
  font-size: 60px;
  font-weight: 300;
  font-style: initial;
}
.el-upload--picture-card {
  border: none;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 100%;
  height: 100%;
}
</style>

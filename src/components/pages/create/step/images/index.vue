<template>
  <div class="images-step">
    <h2 class="form-title">Add some pictures</h2>
    <div class="f">
      <div class="pictures-model">
        <h3 class="pictures-model__header primary-title">MODEL TYPE:</h3>
        <div class="pictures-model__wrap">
          <picture-component v-for="i in 6" />
        </div>
      </div>
      <div class="pictures-campaign">
        <h3 class="pictures-campaign__header primary-title">
          PICTURE OF THE CAMPAIGN:
        </h3>
        <picture-component />
      </div>
    </div>
    <div class="pictures-moodboard">
      <h3 class="pictures-moodboard__header primary-title">MOODBOARD</h3>
      <div class="pictures-moodboard__wrap">
        <picture-component v-for="i in 6" />
      </div>
    </div>
  </div>
</template>

<script>
import PictureComponent from "./picture";

export default {
  name: "images",
  components: {
    PictureComponent
  },
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    }
  }
};
</script>

<style lang="scss">
.images-step {
  padding-top: 50px;
  text-align: left;
}
.images-step .form-title {
  text-align: center;
  margin-bottom: 80px;
}
.pictures-model {
  flex: 0 0 50%;
  padding-right: 16px;
}
.images-step .primary-title {
  margin-bottom: 34px;
}

.pictures-campaign {
  flex: 1;
  padding-left: 56px;
}
.pictures-campaign .upload-picture {
  width: 100%;
  height: calc(100% - 58px);
}

.pictures-model__wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -14px -50px;
}
.pictures-model__wrap .upload-picture {
  flex: 0 0 calc(100% / 3 - 28px);
  margin: 0 14px 50px;
}

.pictures-moodboard {
  padding-top: 68px;
}

.pictures-moodboard__wrap {
  display: flex;
  margin: 0 -10px -10px;
}
.pictures-moodboard__wrap .upload-picture {
  flex: 0 0 calc(100% / 6 - 20px);
  margin: 0 10px 10px;
}
</style>

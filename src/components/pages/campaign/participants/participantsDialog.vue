<template>
  <div class="participants-dialog">
    <div class="f">
      <div
        class="pr-dl-photo dialog-photo"
        style="background-image: url(https://picsum.photos/200)"
      ></div>
      <div class="pr-dl-info">
        <h2 class="dialog-head">
          Carolina Haraque <span class="flag">Italia</span>
        </h2>
        <p class="pr-dl-info__item"><span>Date of Birth:</span> 01-01-1989</p>
        <p class="pr-dl-info__item"><span>Current agency:</span> Fly Agency</p>
        <p class="pr-dl-info__item"><span>Phone: </span> + 39 45583321</p>
        <p class="pr-dl-info__item"><span>Mother agency:</span> Fly Agency</p>
        <p class="pr-dl-info__item"><span>E-mail:</span> carolinah@gmail.com</p>
        <p class="pr-dl-info__item">
          <span>Instagram: </span> <a href="#">caro_haraque</a>
        </p>
      </div>
    </div>
    <hr class="hr" />
    <div class="pr-dl-gallery">
      <div
        class="pr-dl-gallery__item img-c"
        v-for="i in 8"
        :key="`gallery-image-${i}`"
        style="background-image: url(https://picsum.photos/200)"
      ></div>
    </div>
    <div class="dialog-footer">
      <el-button @click.native="detailsClick" type="danger" size="small" plain
        >Decline
      </el-button>
      <el-button @click.prevent="acceptClick" type="success" size="small"
        >Accept
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticipantsDialog"
};
</script>

<style lang="scss">
@import "~@/style/components/dialog.scss";
.pr-dl-photo {
  min-width: 237px;
  height: 226px;
}
.pr-dl-info {
  display: flex;
  flex-wrap: wrap;
  padding-left: 80px;
}
.participants-dialog .dialog-head {
  padding-top: 10px;
  margin-bottom: 20px;
}
.pr-dl-info__item {
  flex: 0 0 50%;
  padding-right: 20px;
  margin-bottom: 0;
  padding-top: 28px;
  font-size: 20px;
  font-weight: 300;
  color: rgba($color-2, 0.5);
}

.pr-dl-info__item span {
  color: $color-2;
  padding-right: 10px;
}

.pr-dl-info__item a {
  color: $color-1;
}

.pr-dl-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -5px -5px;
}

.pr-dl-gallery__item {
  margin: 0 5px 5px;
  flex: 0 0 calc(25% - 10px);
  height: 236px;
}
</style>

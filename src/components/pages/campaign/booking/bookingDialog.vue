<template>
  <div class="booking-dialog">
    <div class="f-a-c">
      <div
        class="b-dl-photo dialog-photo"
        style="background-image: url(https://picsum.photos/200)"
      ></div>
      <div class="b-dl-info">
        <h2 class="dialog-head">
          Fishbar De Milan <span class="flag">Italia</span>
        </h2>
        <p class="b-dl-subhead">Via Meridiano 12, Milan</p>
      </div>
    </div>
    <hr class="hr" />

    <div class="b-dl-schedule">
      <div class="b-dl-schedule__header">Bookings</div>
      <div class="b-dl-schedule__wrap">
        <div
          class="b-dl-schedule__col"
          v-for="i in 5"
          :key="`gallery-col-${i}`"
        >
          <h3 class="b-dl-schedule__col-header">Monday:</h3>
          <div class="count-range">
            10:00 - 12:00 <span class="count-range__count">2</span>
          </div>
          <div class="b-dl-schedule__item">
            <div
              class="b-dl-schedule__photo dialog-photo"
              style="background-image: url(https://picsum.photos/200)"
            ></div>
            <h4 class="b-dl-schedule__name">Carolina Haraque</h4>
          </div>

          <div class="b-dl-schedule__item">
            <div
              class="b-dl-schedule__photo dialog-photo"
              style="background-image: url(https://picsum.photos/200)"
            ></div>
            <h4 class="b-dl-schedule__name">Carolina Haraque</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingDialog"
};
</script>

<style lang="scss">
@import "~@/style/components/dialog.scss";
.booking .el-dialog {
  width: calc(100% - 110px);
  max-width: calc(100% - 110px);
}
.booking-dialog .hr {
  background-color: #e0e0e0;
  height: 1px;
  border: none;
  opacity: 1;
}

.b-dl-photo {
  min-width: 113px;
  height: 113px;
}
.b-dl-subhead {
  color: rgba($color-2, 0.8);
  font-size: 20px;
  margin: 0;
}

.b-dl-info {
  display: flex;
  flex-wrap: wrap;
  padding-left: 32px;
}
.booking-dialog .dialog-head {
  margin-bottom: 12px;
}
.booking-dialog .count-range:not(:last-child) {
  margin-bottom: 35px;
}
.b-dl .b-dl-info__item {
  flex: 0 0 50%;
  padding-left: 20px;
}
.b-dl-schedule__header {
  color: $color-2;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
  padding-top: 20px;
}

.b-dl-schedule__col-header {
  line-height: 26.22px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 32px;
}

.b-dl-schedule__name {
  font-weight: 300;
  padding-top: 16px;
}

.b-dl-schedule__wrap {
  display: flex;
}
.b-dl-schedule__photo {
  width: 100%;
  height: 160px;
}
.b-dl-schedule__photo:not(:last-child) {
  margin-bottom: 45px;
}

.b-dl-schedule__col {
  flex: 1;
  text-align: center;
  color: $color-2;
  font-size: 20px;
}

.b-dl-schedule__col:not(:last-child) {
  padding-right: 57px;
  border-right: 1px solid #e0e0e0;
}
.b-dl-schedule__col:not(:first-child) {
  padding-left: 57px;
}
</style>

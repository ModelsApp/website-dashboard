<template>
  <div
    class="campaign-banner bc-img"
    :style="{
      backgroundImage: `url(${image})`
    }"
  >
    <span class="card-type big">Gifting Campaign</span>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    image: {
      default: "https://picsum.photos/300/300",
      required: false
    }
  }
};
</script>

<style>
.campaign-banner {
  height: 173px;
}
</style>

<template>
  <div class="details-step">
    <h2 class="form-title">Details & Rewards</h2>
    <div class="credits-wrap">
      <credit />
      <credit />
    </div>
    <hr />
    <pick-up />
    <tasks />
  </div>
</template>

<script>
import Credit from "./credit";
import PickUp from "./pickUp";
import Tasks from "./tasks";

export default {
  name: "detailsComponent",
  components: {
    Credit,
    PickUp,
    Tasks
  }
};
</script>

<style type="scss">
.credits-wrap {
  display: flex;
}
.credits-wrap .credits {
  flex: 0 0 50%;
}
</style>

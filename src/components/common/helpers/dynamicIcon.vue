<template>
  <component :is="dynamicIcon" />
</template>

<script>
export default {
  name: "dynamicIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon() {
      /* webpackChunkName: "icons" */
      /* webpackMode: "lazy-once" */
      return () => import(`./icons/${this.icon}.svg`);
    }
  }
};
</script>

<style></style>

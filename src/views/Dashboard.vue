<template>
  <div>
    <header-component></header-component>
    <card-wrap v-loading="!campaigns.length" :cards="campaigns"></card-wrap>
  </div>
</template>

<script lang="ts">
import CardWrap from "@/components/pages/dashboard/cardWrap.vue";
import HeaderComponent from "@/components/pages/dashboard/header.vue";

import { Vue, Component } from "vue-property-decorator";

import { mapGetters, mapActions } from "vuex";

@Component({
  name: "home",
  components: {
    CardWrap,
    HeaderComponent
  },
  computed: {
    ...mapGetters("dashboard", ["campaigns"])
  },
  methods: {
    ...mapActions("dashboard", ["loadCampaigns"])
  }
})
export default class Dashboard extends Vue {
  loadCampaigns!: Function;
  campaigns!: Campaign[];

  created() {
    this.loadCampaigns();
  }
}
</script>

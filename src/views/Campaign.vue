<template>
  <div class="campaign-page card-container">
    <banner />
    <el-tabs v-model="activeTab" @tab-click="tabChange">
      <el-tab-pane label="Info" name="info">
        <component :is="activeTab"></component>
      </el-tab-pane>
      <el-tab-pane label="250 Participants" name="participants">
        <component :is="activeTab"></component>
      </el-tab-pane>
      <el-tab-pane label="Booking" name="booking">
        <component :is="activeTab"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabs, TabPane } from "element-ui";
[Tabs, TabPane].forEach(i => Vue.component(i.name, i));

import { mapGetters, mapActions } from "vuex";

import Banner from "@/components/pages/campaign/banner";
import Info from "@/components/pages/campaign/info/index";
import Participants from "@/components/pages/campaign/participants/index";
import Booking from "@/components/pages/campaign/booking/index";

export default {
  name: "Campaign",
  components: {
    Banner,
    Info,
    Participants,
    Booking
  },
  data() {
    return {
      activeTab: "info"
    };
  },
  created() {
    const { id } = this.$router.currentRoute.params;
    this.loadCampaign(id);
  },
  methods: {
    ...mapActions("campaign/info", ["loadCampaign"]),
    tabChange() {}
  },
  computed: {
    ...mapGetters("campaign/info", ["campaign"])
  }
};
</script>

<style lang="scss">
@import "~@/style/pages/campaign.scss";
</style>

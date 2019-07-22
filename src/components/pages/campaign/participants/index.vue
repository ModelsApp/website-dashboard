<template>
  <div>
    <div class="infinite-list" v-infinite-scroll="load">
      <table-component
        dialog-name="ParticipantsDialog"
        @close-dialog="dialogClose"
        @row-select="rowSelect"
      />
      <div class="load" v-if="isLoading">is Load</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { InfiniteScroll } from "element-ui";
Vue.use(InfiniteScroll.install);

import TableComponent from "@/components/common/helpers/table";
import ParticipantsDialog from "./participantsDialog";

import { mapGetters, mapActions } from "vuex";

Vue.component(ParticipantsDialog.name, ParticipantsDialog);

export default {
  name: "participants",
  methods: {
    ...mapActions("campaign/participants", ["loadMore"]),
    load() {
      console.log("load");
      // this.loadMore();
    },
    rowSelect() {},
    dialogClose() {}
  },
  components: {
    TableComponent
  },
  computed: {
    ...mapGetters("campaign/participants", ["participants", "isLoading"])
  },
  created() {
    console.log("created");
    !this.participants.length ? this.loadMore() : null;
  }
};
</script>

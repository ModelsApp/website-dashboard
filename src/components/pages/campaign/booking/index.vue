<template>
  <div class="booking">
    <div class="infinite-list" v-infinite-scroll="load">
      <table-component
        dialog-name="BookingDialog"
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

import BookingDialog from "./bookingDialog";
Vue.component(BookingDialog.name, BookingDialog);

import { mapGetters, mapActions } from "vuex";

export default {
  name: "booking",
  data() {
    return {
      isDialogVisible: false
    };
  },
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
    !this.participants.length ? this.loadMore() : null;
  }
};
</script>

<template>
  <div class="page-title">
    <header class="title">Dashboard</header>
    <div class="page-actions">
      <div class="small-selector">
        <span class="page-actions__text-before">Sorted by</span>
        <el-select
          v-model="selectedFilter"
          placeholder=""
          class="filter-selector"
        >
          <el-option
            v-for="(f, i) in ['All', 2, 3]"
            :key="`filter-${i}`"
            :label="f"
            :value="f"
          ></el-option>
        </el-select>
      </div>
      <el-button type="primary" class="big">
        <router-link to="/campaign/create"
          >Create <span class="icon-plus">+</span></router-link
        >
      </el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Select, Option } from "element-ui";
[Select, Option].forEach(i => Vue.component(i.name, i));

export default {
  name: "headerComponent",
  data: () => {
    return {
      selectedFilter: "All"
    };
  },
  methods: {}
};
</script>

<style class="scss">
.page-title {
  display: flex;
  justify-content: space-between;
  margin: 0 0 40px;
}
.page-title .title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.3px;
}
.page-actions {
  display: flex;
}
.page-actions > *:not(:first-child) {
  margin-left: 24px;
}
</style>

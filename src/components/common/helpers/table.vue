<template>
  <div>
    <el-table
      :data="parsedData"
      style="width: 100%"
      :header-row-style="headerRowStyle"
      @row-click="rowSelected"
    >
      <el-table-column fixed label="" width="200">
        <template slot-scope="scope">
          <div
            class="table-img"
            :style="`background-image: url(${getImage(scope)})`"
          ></div>
        </template>
      </el-table-column>

      <el-table-column
        v-for="(prop, index) in rowFields"
        :key="index"
        fixed
        :prop="prop"
        :label="prop"
      >
      </el-table-column>

      <el-table-column fixed="right" label="Status" width="200">
        <template slot-scope="scope">
          <el-button
            @click.native="detailsClick"
            type="danger"
            size="small"
            plain
            >Decline
          </el-button>
          <el-button @click.prevent="acceptClick" type="success" size="small"
            >Accept
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <dialog-component
      v-if="dialogName"
      :is-show="isDialogVisible"
      :component-name="dialogName"
      @close="dialogClose"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Table, TableColumn } from "element-ui";
[Table, TableColumn].forEach(i => Vue.component(i.name, i));

import DialogComponent from "./dialog";

export default {
  name: "table-component",
  components: {
    DialogComponent
  },
  data() {
    return {
      isDialogVisible: false,
      isButtonClicked: false,
      data: [
        {
          img: "https://picsum.photos/200",
          name: "name1",
          surname: "surname1",
          location: "location1",
          agency: "agency",
          status: "status"
        },
        {
          img: "https://picsum.photos/200",
          name: "name2",
          surname: "surname1",
          location: "location1",
          agency: "agency",
          status: "status"
        },
        {
          img: "https://picsum.photos/200",
          name: "name3",
          surname: "surname1",
          location: "location1",
          agency: "agency",
          status: "status"
        },
        {
          img: "https://picsum.photos/200",
          name: "name4",
          surname: "surname1",
          location: "location1",
          agency: "agency",
          status: "status"
        }
      ]
    };
  },
  props: {
    imgFieldName: {
      required: false,
      default: "img"
    },
    dialogName: {
      required: false,
      default: null
    }
  },
  computed: {
    rowFields() {
      return Object.keys(this.parsedData[0]);
    },
    parsedData() {
      return this.data.map(i => {
        const updated = Object.assign({}, i);
        delete updated[this.imgFieldName];
        return updated;
      });
    }
  },
  methods: {
    rowSelected(row) {
      this.$emit("row-select", row);
      this.isDialogVisible = !this.isButtonClicked;
    },
    getImage(scope) {
      return this.data[scope.$index][this.imgFieldName];
    },
    dialogClose() {
      this.$emit("dialog-close");
      this.isDialogVisible = false;
    },
    detailsClick(e) {
      this.buttonClick();
    },
    acceptClick() {
      this.buttonClick();
    },
    buttonClick() {
      this.isButtonClicked = true;
      setTimeout(() => {
        this.isButtonClicked = false;
      }, 20);
    },
    headerRowStyle({ row, rowIndex }) {
      return {
        backgroundImage: "linear-gradient(45deg, #f7425b 0%, #e82e90 100%)"
      };
    }
  }
};
</script>

<style lang="scss">
@import "~@/style/components/table.scss";
</style>

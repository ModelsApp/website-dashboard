<template>
  <div class="info-step">
    <h2 class="form-title">Add the info of the campaign</h2>
    <el-form ref="form" :model="data" :rules="rules" class="form">
      <form-group
        title="name of the campaign"
        name="name"
        input-type="input"
        :value="data.name"
        @update="update($event, 'name')"
      />
      <form-group
        title="type"
        name="type"
        :value="data.type"
        :list="typeData"
        input-type="select"
        @update="update($event, 'type')"
      />
      <form-group
        title="Available From / Till"
        name="availableDate"
        :value="data.availableDate"
        input-type="date"
        @update="update($event, 'availableDate')"
      />
      <form-group
        title="Start At"
        name="startDate"
        :value="data.startDate"
        input-type="date"
        @update="update($event, 'startDate')"
      />
      <form-group
        title="Upload Pictures To"
        name="uploadDate"
        :value="data.uploadDate"
        input-type="date"
        @update="update($event, 'uploadDate')"
      />
      <form-group
        title="Upload Pictures On ig To"
        name="uploadOnDate"
        :value="data.uploadOnDate"
        input-type="date"
        @update="update($event, 'uploadOnDate')"
      />
    </el-form>
    <div class="description">
      <h3 class="primary-title">Description</h3>
      <p class="description-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
        ducimus eligendi excepturi incidunt ipsa maxime natus quas rerum
        tempore.
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { FormItem, Form } from "element-ui";
[FormItem, Form].forEach(i => Vue.component(i.name, i));

import FormGroup from "@/components/common/helpers/form-group";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "info",
  components: {
    FormGroup
  },
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        typeData: [
          { required: true, message: "Please select Type", trigger: "blur" }
        ],
        availableDate: [
          {
            required: true,
            message: "Please select Available Date",
            trigger: "blur"
          }
        ],
        startDate: [
          {
            required: true,
            message: "Please select Start Date",
            trigger: "blur"
          }
        ],
        uploadDate: [
          {
            required: true,
            message: "Please select Upload Date",
            trigger: "blur"
          }
        ],
        uploadOnDate: [
          {
            required: true,
            message: "Please select Upload On Date",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.updateTypeData();
  },
  computed: {
    ...mapGetters("create/info", {
      data: "form",
      typeData: "typeData"
    })
  },
  methods: {
    ...mapActions("create/info", ["updateFormItem", "updateTypeData"]),
    update(val, name) {
      this.updateFormItem({ name: name, val: val });
    }
  }
};
</script>

<style lang="scss">
.info-step {
  padding-top: 50px;
  text-align: center;
}
.info-step .form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 48px;
}
.info-step .group:nth-child(2) {
}
.info-step .el-form-item {
  flex: 0 0 33.3333%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
}
.info-step .description {
  text-align: left;
}
.info-step .description .primary-title {
  padding-top: 30px;
}
.info-step .description-text {
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(#979797, 0.3);
  margin-bottom: 0;
}
</style>

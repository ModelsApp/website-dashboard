<template>
  <div class="card-container card-m-pad campaign-create">
    <header-component :active="activeStep" />
    <transition name="fade" mode="out-in">
      <component :is="`${step}-component`" :ref="step" />
    </transition>
    <footer-component @confirm="confirm" />

    <final-dialog :is-active="isFinalStep" @close="finalClose" />
  </div>
</template>

<script>
import HeaderComponent from "../components/pages/create/header";
import FooterComponent from "../components/pages/create/footer";
import FinalDialog from "../components/pages/create/step/finalDialog";

import InfoComponent from "../components/pages/create/step/info/index";
import DetailsComponent from "../components/pages/create/step/details/index";
import ImagesComponent from "../components/pages/create/step/images/index";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CampaignCreate",
  data: () => {
    return {
      isNextClicked: false,
      isNextStep: false
    };
  },
  components: {
    InfoComponent,
    DetailsComponent,
    ImagesComponent,
    HeaderComponent,
    FooterComponent,
    FinalDialog
  },
  methods: {
    ...mapActions("create", {
      nextStep: "nextStep",
      finishCreate: "finishCreate"
    }),
    confirm() {
      const name = this.step;
      const component = this.$refs[name];

      const isFormExistInComponent =
        "$refs" in component && component.$refs.form;

      if (isFormExistInComponent) {
        const form = component.$refs.form;
        form.validate(valid => {
          valid ? this.nextStep() : null;
        });
      } else {
        this.nextStep();
      }
    },
    finalClose() {
      this.finishCreate();
    }
  },
  computed: {
    ...mapGetters("create", {
      activeStep: "step",
      isFinalStep: "isFinalStep"
    }),
    step() {
      return this.activeStep === 1
        ? "details"
        : this.activeStep === 2
        ? "images"
        : "info";
    }
  }
};
</script>

<style lang="scss">
@import "~@/style/components/step.scss";
.fade-enter-active {
  transition: all 0.4s;
}
.fade-enter {
  opacity: 0;
  margin-left: 90px;
}
.fade-leave-active {
  transition: all 0.4s;
  opacity: 0;
  margin-left: -100px;
}
.campaign-create {
  font-family: "Circular Std Book", sans-serif;
}
</style>

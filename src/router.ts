import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue")
    },
    {
      path: "/campaign/create",
      name: "campaignCreate",
      component: () => import("./views/CampaignCreate.vue"),
      children: [
        {
          path: "info",
          name: "createStepInfo",
          component: () =>
            import("./components/pages/create/step/info/index.vue")
        },
        {
          path: "details",
          name: "createStepDetails",
          component: () =>
            import("./components/pages/create/step/details/index.vue")
        },
        {
          path: "images",
          name: "createStepImages",
          component: () =>
            import("./components/pages/create/step/images/index.vue")
        }
      ]
    },
    {
      path: "/campaign/:id",
      name: "campaign",
      component: () => import("./views/Campaign.vue")
    },
    {
      path: "**",
      redirect: "dashboard"
    }
  ]
});

<template>
  <aside>
    <div class="aside-logo">
      <dynamic-icon icon="logo" class="logo" />
    </div>
    <div
      class="aside-group"
      v-for="(group, groupIndex) in groupLinks"
      :key="groupIndex"
    >
      <p class="name">{{ group.name }}</p>
      <template v-for="(link, linkIndex) in group.links">
        <router-link
          :to="`/${link.link}`"
          :key="linkIndex"
          :class="{ active: link.link === $route.name }"
          class="link"
        >
          <template v-if="link.icon">
            <dynamic-icon :icon="link.icon" />
          </template>
          <span class="link-name">{{ link.name }}</span>
        </router-link>
      </template>
    </div>
  </aside>
</template>

<script>
import Vue from "vue";
import { Aside } from "element-ui";
[Aside].forEach(i => Vue.component(i.name, i));

import DynamicIcon from "@/components/common/helpers/dynamicIcon";

export default {
  name: "aside-component",
  data: () => {
    return {
      groupLinks: [
        {
          name: "home",
          links: [{ name: "Campaigns", icon: "campaigns", link: "dashboard" }]
        },
        {
          name: "content",
          links: [
            { name: "pending", icon: "", link: "" },
            { name: "reviewed", icon: "", link: "" }
          ]
        },
        {
          name: "members",
          links: [
            { name: "pending", icon: "", link: "" },
            { name: "registered", icon: "", link: "" }
          ]
        },
        {
          name: "partners",
          links: [{ name: "partners", icon: "", link: "" }]
        },
        {
          name: "overview",
          links: [
            { name: "prenotations", icon: "", link: "" },
            { name: "offers", icon: "", link: "" }
          ]
        },
        {
          name: "prenotations",
          links: [{ name: "prenotations", icon: "", link: "" }]
        },
        {
          name: "settings",
          links: [{ name: "settings", icon: "", link: "" }]
        }
      ]
    };
  },
  components: {
    DynamicIcon
  },
  methods: {}
};
</script>

<style lang="scss">
@import "~@/style/var.scss";

.el-aside {
  box-shadow: 1px 0 rgba(216, 216, 216, 0.4);
  z-index: 2;
}

.aside-logo {
  padding: 26px 0 0 30px;
  margin-bottom: 48px;
}

.logo {
  width: 149px;
  height: 34px;
}
.aside-group {
  margin-bottom: 40px;
}

.aside-group:last-child {
  margin-bottom: 0;
}

.aside-group .link {
  border-left: 3px solid transparent;
  padding: 14px 30px;
}
.aside-group .link.active,
.aside-group .link:hover {
  border-left-color: $color-1;
  background: rgba($color-1, 0.05);
}
.aside-group .name {
  text-transform: uppercase;
  font-size: 18px;
  padding: 0 30px;
}
.aside-group .link-name {
  color: $color-1;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
}
.aside-group .link {
  display: flex;
  align-items: center;
}
</style>

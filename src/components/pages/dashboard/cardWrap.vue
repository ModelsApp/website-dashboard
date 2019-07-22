<template>
  <div class="card-wrap">
    <div class="card-wrap__container" v-if="cards.length">
      <template v-for="(card, index) in cards">
        <card-component
          :key="`card-${index}`"
          :card="card"
          @click.native="cardSelect(card.id)"
          class="card"
        />
      </template>
      <div class="el-card hollow" v-for="(h, i) of 3" :key="i"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "element-ui";
[Card].forEach(i => Vue.component(i.name, i));
import CardComponent from "./card";

export default {
  name: "cardWrap",
  props: {
    cards: Array
  },
  components: {
    CardComponent
  },
  methods: {
    cardSelect(id) {
      this.$router.push({ path: `/campaign/${id}` });
    }
  }
};
</script>

<style lang="scss">
.card-wrap {
  overflow: hidden;
  margin: -40px;
  padding: 60px 40px;
}
.card-wrap__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -20px -40px;
}
.card-wrap .el-card {
  flex: 0 0 286px;
  border: 0;
  margin: 0 20px 40px;
}

.card-wrap__container .el-card.hollow {
  visibility: hidden;
  height: 0;
}

// Card
.el-card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: "Circular Std Book", sans-serif;
}

.el-card,
.el-card__body {
  padding: 0;
}

.card-img {
  position: relative;
  height: 215px;
  background: no-repeat center center;
  background-size: cover;
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 14px;
}

.card-body {
  padding: 24px;
}

.card-body hr {
  height: 1px;
  border-radius: 1px;
  border: 1px solid #979797;
  background-color: #d8d8d8;
  opacity: 0.3;
}

.card-desc {
  letter-spacing: -1px;
  height: 40px;
  overflow: hidden;
}
.card-date .type {
  font-weight: 700;
  padding-right: 12px;
}
.card-date {
  padding-top: 16px;
}
.card-date .date {
  letter-spacing: 1.5px;
}

.card-footer {
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.card-footer a,
.card-footer .el-button {
  width: 100%;
}
</style>

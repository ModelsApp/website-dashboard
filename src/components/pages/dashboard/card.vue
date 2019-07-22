<template>
  <el-card>
    <div
      class="card-img"
      :style="{
        backgroundImage: 'url(' + 'https://picsum.photos/300/300' + ')'
      }"
    >
      <span class="card-type">{{ card.type }} Campaign</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">
        {{ card.title }}
      </h3>
      <p class="card-desc">
        {{ card.description }}
      </p>
      <hr />
      <div class="card-date">
        <span class="type">Open: </span>
        <span class="date">{{ card.availableFrom }}</span>
      </div>
      <div class="card-date">
        <span class="type">Close: </span>
        <span class="date">{{ card.availableTill }}</span>
      </div>
      <div class="card-footer">
        <router-link to="/campaign/1">
          <el-button type="info"
            >{{ card.maxParticipantsCount }} Participants</el-button
          >
        </router-link>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "CardComponent"
})
export default class Card extends Vue {
  @Prop() readonly card!: Campaign;
}
</script>

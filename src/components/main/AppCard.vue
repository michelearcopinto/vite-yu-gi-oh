<script>
import { store } from "../../store";

export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card-box" v-for="(element, index) in store.cardsArray">
    <figure>
      <img :src="element.card_images[0].image_url_small" :alt="element.name" />
    </figure>
    <div class="card-title">
      <h3>{{ element.name }}</h3>
      <span> {{ element.archetype }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.cards-container {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 20px;

  .card-box {
    width: calc((100% - 4 * 20px) / 5);
    text-align: center;
    background-color: $main-color;
    border-radius: 10px;
    overflow: hidden;

    .card-title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      gap: 20px;

      h3 {
        font-size: 15px;
        color: white;
      }
    }
  }
}
</style>

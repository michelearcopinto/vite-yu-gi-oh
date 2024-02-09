<script>
import { store } from "../../store";

export default {
  name: "AppGrid",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div>
      <div class="info-cards">
        <h4>Found {{ store.cardsArray.length }} cards</h4>
      </div>
      <div class="cards-container">
        <div class="card-box" v-for="(element, index) in store.cardsArray">
          <figure>
            <img
              :src="element.card_images[0].image_url_small"
              :alt="element.name"
            />
          </figure>
          <div class="card-title">
            <h3>{{ element.name }}</h3>
            <span> {{ element.archetype }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.container {
  margin-top: 30px;
  padding: 35px;
  background-color: white;
  width: 1600px;

  .info-cards {
    background-color: black;
    color: white;
    margin-bottom: 20px;
    border-radius: 10px;

    h4 {
      padding-block: 10px;
      padding-left: 10px;
    }
  }

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
}
</style>

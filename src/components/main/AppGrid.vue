<script>
import AppCard from "./AppCard.vue";

import { store } from "../../store";

export default {
  name: "AppGrid",
  components: {
    AppCard,
  },
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
        <AppCard />
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
  }
}
</style>

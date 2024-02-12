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
  methods: {},
};
</script>

<template>
  <div class="container">
    <div>
      <div class="info-cards">
        <h4>Found {{ store.cardsArrayClone.length }} cards</h4>
      </div>
      <div class="cards-container">
        <AppCard
          v-for="(element, index) in store.cardsArrayClone"
          :key="index"
          :propElement="element"
        />
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
  height: calc(100% - 86px);
  overflow: auto;

  .info-cards {
    background-color: black;
    color: white;
    margin-bottom: 20px;
    border-radius: 10px;

    h4 {
      padding-block: 10px;
      padding-left: 10px;
      user-select: none;
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

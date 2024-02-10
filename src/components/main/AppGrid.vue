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
  computed: {
    filteredCards() {
      if (!this.store.selectValue) {
        return this.store.cardsArray;
      } else if (this.store.selectValue === "Nessuna classe") {
        return this.store.cardsArray.filter(
          (element) => element.archetype === undefined
        );
      } else {
        return this.store.cardsArray.filter(
          (element) => element.archetype === this.store.selectValue
        );
      }
    },
  },
  methods: {
    showCard(card) {
      if (
        !this.store.selectValue ||
        this.store.selectValue === "Nessuna classe"
      ) {
        return true;
      } else {
        return card.archetype === this.store.selectValue;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div>
      <div class="info-cards">
        <h4>Found {{ filteredCards.length }} cards</h4>
      </div>
      <div class="cards-container">
        <AppCard
          v-for="(element, index) in filteredCards"
          v-show="showCard(element)"
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

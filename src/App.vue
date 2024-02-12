<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppSelect from "./components/main/AppSelect.vue";
import AppGrid from "./components/main/AppGrid.vue";
import Loader from "./components/main/Loader.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppSelect,
    AppGrid,
    Loader,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.requestCards();
  },
  methods: {
    requestCards() {
      setTimeout(() => {
        axios.get(store.apiCardsURL).then((result) => {
          result.data.data.forEach((element) => {
            if (element.archetype !== undefined) {
              if (!store.archetypesArray.includes(element.archetype)) {
                store.archetypesArray.push(element.archetype);
              }
            }
          });

          store.archetypesArray.sort();

          store.cardsArray = result.data.data;
          store.cardsArrayClone = store.cardsArray;
        });
      }, 5000);
    },
    changeArchetype() {
      if (store.selectValue === "Tutte le classi") {
        store.cardsArrayClone = store.cardsArray;
      } else if (store.selectValue === "Nessuna classe") {
        store.cardsArrayClone = this.store.cardsArray.filter(
          (element) => element.archetype === undefined
        );
      } else {
        store.cardsArrayClone = this.store.cardsArray.filter(
          (element) => element.archetype === this.store.selectValue
        );
      }
    },
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSelect @setArchetype="changeArchetype" />
    <AppGrid v-if="store.cardsArray.length === 500" />
    <Loader v-else />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 15px;
}

main {
  height: calc(100vh - 130px);
}
</style>

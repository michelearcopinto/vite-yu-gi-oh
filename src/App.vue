<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppSelect from "./components/main/AppSelect.vue";
import AppGrid from "./components/main/AppGrid.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppSelect,
    AppGrid,
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
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
        .then((result) => {
          result.data.data.forEach((element) => {
            if (element.archetype !== undefined) {
              if (!store.cardsArchetypes.includes(element.archetype)) {
                store.cardsArchetypes.push(element.archetype);
              }
            }
          });

          store.cardsArchetypes.sort();

          store.cardsArray = result.data.data;
        });
    },
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSelect />
    <AppGrid />
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
</style>

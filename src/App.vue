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
        axios
          .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0")
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
            console.log(store.cardsArray);
          });
      }, 5000);
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
    <AppGrid v-if="store.cardsArray.length === 50" />
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

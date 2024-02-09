<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppSelect from "./components/main/AppSelect.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppSelect,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.requestCardsClasses();
  },
  methods: {
    requestCardsClasses() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then((result) => {
          result.data.data.forEach((element) => {
            if (element.archetype !== undefined) {
              if (!store.cardsArchetypes.includes(element.archetype)) {
                store.cardsArchetypes.push(element.archetype);
              }
            }
          });
          store.cardsArchetypes.sort();
          console.log(store.cardsArchetypes);
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

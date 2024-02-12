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
    this.requestArchetypes();
  },
  methods: {
    requestCards() {
      if (store.apiCardsURL.length === store.apiCardsURLCopy.length) {
        store.apiCardsURLCopy += "?archetype=Blue-Eyes";
      }

      setTimeout(() => {
        axios.get(store.apiCardsURLCopy).then((result) => {
          store.cardsArray = result.data.data;
        });
      }, 3000);
    },
    requestArchetypes() {
      axios.get(store.apiArchetypesURL).then((result) => {
        result.data.forEach((element) => {
          store.archetypesArray.push(element.archetype_name);
        });
      });
      console.log(store.archetypesArray);
    },
    changeArchetype() {
      store.cardsArray = [];
      store.apiCardsURLCopy = store.apiCardsURL;

      store.apiCardsURLCopy += `?archetype=${this.store.selectValue}`;
      this.requestCards();
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
    <AppGrid v-if="store.cardsArray.length >= 1" />
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

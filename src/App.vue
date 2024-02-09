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
    this.requestRandomMail();
  },
  methods: {
    requestRandomMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          store.randomMail = result.data.response;
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
}
</style>

<script>
import { store } from "../../store";

export default {
  name: "AppSelect",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <select
      v-model="store.selectValue"
      @change="console.log(store.selectValue)"
    >
      <option value="Tutte le classi" selected>Tutte le classi</option>
      <option value="Nessuna classe">Nessuna classe</option>
      <option
        v-for="(element, index) in store.cardsArchetypes"
        :value="element"
      >
        {{ element }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.container {
  padding-top: 30px;
  width: 1600px;

  select {
    margin-left: 15px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>

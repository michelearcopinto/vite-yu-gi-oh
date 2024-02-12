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
    <select v-model="store.selectValue" @change="$emit('setArchetype')">
      <option value="" selected hidden>Scegli un archetipo</option>
      <option v-for="element in store.archetypesArray" :value="element">
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

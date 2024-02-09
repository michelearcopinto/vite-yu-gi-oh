<script>
export default {
  name: "Loader",
};
</script>

<template>
  <div>
    <h1>Loading...</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

div {
  background-color: grey;
  color: white;
  height: calc(100vh - 186px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
}
</style>

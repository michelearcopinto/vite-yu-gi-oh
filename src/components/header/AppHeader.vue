<script>
// import

export default {
  name: "AppHeader",
};
</script>

<template>
  <figure>
    <img src="../../assets/img/logo-header.jpg" alt="logo-header" />
  </figure>
  <h1>API</h1>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

img {
  height: 100px;
}

h1 {
  font-family: monospace;
  font-size: 80px;
}
</style>

<script>
export default {
  name: "AppCard",
  props: ["propElement"],
};
</script>

<template>
  <div class="card-box">
    <figure>
      <img
        :src="propElement.card_images[0].image_url_small"
        :alt="propElement.name"
      />
    </figure>
    <div class="card-title">
      <h3>{{ propElement.name }}</h3>
      <span> {{ propElement.archetype }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.cards-container {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 20px;

  .card-box {
    width: calc((100% - 4 * 20px) / 5);
    text-align: center;
    background-color: $main-color;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);

    &:hover {
      cursor: pointer;
    }

    figure:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }

    .card-title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      gap: 20px;
      user-select: none;

      h3 {
        font-size: 15px;
        color: white;
      }
    }
  }
}
</style>

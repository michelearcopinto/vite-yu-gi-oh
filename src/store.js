import { reactive } from "vue";

export const store = reactive({
  cardsArray: [],
  cardsArrayClone: [],
  archetypesArray: [],
  selectValue: "Tutte le classi",
  apiCardsURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0",
});

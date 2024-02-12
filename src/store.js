import { reactive } from "vue";

export const store = reactive({
  cardsArray: [],
  archetypesArray: [],
  selectValue: "",
  apiCardsURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiCardsURLCopy: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiArchetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
});

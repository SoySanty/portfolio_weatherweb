import { SEARCH_RESULTS, SET_PLACE } from "./list";

const searchResults = (payload: [string]) => ({
  type: SEARCH_RESULTS,
  payload,
});

const setPlace = (payload: string) => ({
  type: SET_PLACE,
  payload,
});
export { searchResults, setPlace };

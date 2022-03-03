import { SEARCH_RESULTS, SET_DAILY, SET_HOURLY, SET_PLACE } from "./list";

const searchResults = (payload: [string]) => ({
  type: SEARCH_RESULTS,
  payload,
});

const setPlace = (payload: string) => ({
  type: SET_PLACE,
  payload,
});

const setDaily = (payload: [any]) => ({
  type: SET_DAILY,
  payload,
});

const setHourly = (payload: [any]) => ({
  type: SET_HOURLY,
  payload,
});
export { searchResults, setPlace, setDaily, setHourly };

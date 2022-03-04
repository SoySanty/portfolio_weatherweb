import { combineReducers } from "redux";
import search from "state/reducers/search";
import modal from "state/reducers/modal";

const reducers = combineReducers({
  search,
  modal,
});

export default reducers;

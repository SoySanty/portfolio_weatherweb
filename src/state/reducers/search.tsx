import {
  SEARCH_RESULTS,
  SET_DAILY,
  SET_HOURLY,
  SET_PLACE,
} from "state/actions/list";

const initialState = {
  placeTarget: {
    id: "",
    name: "",
    position: { lon: 0, lat: 0 },
  },
  search: {
    searchTerm: "",
    searchResults: [],
    searchLoading: false,
  },
  hourly: [],
  daily: [],
};

const search = (state = initialState, action: any) => {
  switch (action.type) {
    //Search result
    case SEARCH_RESULTS:
      return {
        ...state,
        search: {
          ...state.search,
          searchResults: action.payload,
        },
      };

    //Place target
    case SET_PLACE:
      return {
        ...state,
        placeTarget: {
          ...state.placeTarget,
          ...action.payload,
        },
      };

    //Set hourly
    case SET_HOURLY:
      return {
        ...state,
        hourly: [...action.payload],
      };

    //Set daily
    case SET_DAILY:
      return {
        ...state,
        daily: [...action.payload],
      };

    default:
      return state;
  }
};

export default search;

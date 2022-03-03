import { SEARCH_RESULTS, SET_PLACE } from "state/actions/list";

const initialState = {
  placeTarget: {
    id: "place.9638983510557610",
    name: "Samaipata, Santa Cruz, Bolivia",
    position: { lon: -63.8752, lat: -18.1778 },
  },
  search: {
    searchTerm: "",
    searchResults: [],
    searchLoading: false,
  },
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
    default:
      return state;
  }
};

export default search;

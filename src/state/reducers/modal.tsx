import { SET_START_MODAL } from "state/actions/list";

const initialState = {
  isActive: true,
};

const modal = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_START_MODAL:
      return {
        ...state,
        isActive: action.payload,
      };
    default:
      return state;
  }
};

export default modal;

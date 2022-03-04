import { SET_START_MODAL } from "./list";

const setStartModal = (payload: boolean) => ({
  type: SET_START_MODAL,
  payload,
});

export { setStartModal };

import { Reducer } from "react";
import { OPEN_MODAL, CLOSE_MODAL } from "./modalConstants";

type ModalAction = {
  type: string;
}

type ModalState = {
  openModal: boolean;
};

const initialState: ModalState = {
  openModal: false,
};

const reducer: Reducer<ModalState, ModalAction> = (
  state: ModalState,
  action: ModalAction
) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log("oprer")
      return { openModal: true };
    case CLOSE_MODAL:
      return { openModal: false };
    default:
      return state;
  }
};

export { initialState, reducer };

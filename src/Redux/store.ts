import {configureStore} from "@reduxjs/toolkit";

const ADDCOLUMN: string = "ADDCOLUMN";
const DELETECOLUMN: string = "DELETECOLUMN";
const ADDCARD: string = "ADDCARD";
const DELETECARD: string = "DELETECARD";

interface columnState {
  columns: {
    title: string;
    cardArr: [];
  }[];
}

const defaultState: columnState = {
  columns: [],
};

export const addColumn = (name: string) => {
  return {
    type: ADDCOLUMN,
    payload: name,
  };
};

export const deleteColumn = (index: number) => {
  return {
    type: DELETECOLUMN,
    payload: index,
  };
};

export const deleteCard = (index: number) => {
  return {
    type: DELETECARD,
    payload: index,
  };
};
export const addCard = (index: number, name: string) => {
  return {
    type: ADDCARD,
    payload: {
      index: index,
      name: name,
    },
  };
};
const columnReducer = (state = defaultState, action: any): columnState => {
  switch (action.type) {
    case ADDCOLUMN:
      return {
        ...state,
        columns: [...state.columns, {title: action.payload, cardArr: []}],
      };
    case DELETECOLUMN:
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, action.payload),
          ...state.columns.slice(action.payload + 1),
        ],
      };
    case ADDCARD:
      const tmpState = JSON.parse(JSON.stringify(state));
      tmpState.columns[action.payload.index].cardArr.unshift(
        action.payload.name
      );
      return {...tmpState};
    case DELETECARD:
      return {...state};
    default:
      return {...state};
  }
};

const store = configureStore({
  reducer: {columnReducer},
});

export default store;

//définir les types selon les types lié au store.
//cf doc https://react-redux.js.org/tutorials/typescript-quick-start
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

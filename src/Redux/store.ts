import {
  createAction,
  configureStore,
  Action,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
const ADDCOLUMN: string = "ADDCOLUMN";
const DELETECOLUMN: string = "DELETECOLUMN";

const defaultState = {
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

const columnReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ADDCOLUMN:
      return {...state, columns: [...state.columns, action.payload]};
    case DELETECOLUMN:
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, action.payload),
          ...state.columns.slice(action.payload + 1),
        ],
      };
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

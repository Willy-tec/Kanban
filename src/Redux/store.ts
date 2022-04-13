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

export const deleteCard = (col: number, card: number) => {
  return {
    type: DELETECARD,
    payload: {
      indexCol: col,
      indexCard: card,
    },
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
    case ADDCARD: {
      const tmpState = JSON.parse(JSON.stringify(state)); // copie profonde du state
      tmpState.columns[action.payload.index].cardArr.unshift(
        action.payload.name
      );
      return {...tmpState};
    }
    case DELETECARD: {
      const tmpState = JSON.parse(JSON.stringify(state)); // copie profonde du state
      const cardArr = tmpState.columns[action.payload.indexCol].cardArr;
      const tmpArr = [
        ...cardArr.slice(0, action.payload.indexCard),
        ...cardArr.slice(action.payload.indexCard + 1),
      ];
      tmpState.columns[action.payload.indexCol].cardArr = tmpArr;
      return {...tmpState};
    }
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

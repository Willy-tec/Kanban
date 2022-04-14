import {configureStore} from "@reduxjs/toolkit";
import {
  ADDCOLUMN,
  DELETECOLUMN,
  ADDCARD,
  DELETECARD,
  SETPROJECTNAME,
} from "./action";
import {readFromStorage, writeToStorage} from "./localStorage";

interface columnState {
  projectName: string;
  columns: {
    title: string;
    cardArr: string[];
  }[];
  lastUpdate: string;
}

const defaultState: columnState = {
  projectName: "Nom du projet",
  columns: [],
  lastUpdate: "unknow",
};

const storedData = readFromStorage();

const columnReducer = (
  state = storedData.columnReducer || defaultState,
  action: any
): columnState => {
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
    case SETPROJECTNAME: {
      return {...state, projectName: action.payload};
    }
    default:
      return {...state};
  }
};

export const saveToLocalStorage =
  (store: any) => (next: any) => (action: any) => {
    let result = next(action);
    writeToStorage(store.getState());
    return result;
  };

const store = configureStore({
  reducer: {columnReducer},
  middleware: [saveToLocalStorage],
});

export default store;

//définir les types selon les types lié au store.
//cf doc https://react-redux.js.org/tutorials/typescript-quick-start
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

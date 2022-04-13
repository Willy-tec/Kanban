import {RootState} from "./store";

const storage = localStorage;

export const readFromStorage = () => {
  const data = storage.getItem("storedState") || "{}";
  return JSON.parse(data);
};

export const writeToStorage = (value: RootState) => {
  value.columnReducer.lastUpdate = new Date().toLocaleString();
  storage.setItem("storedState", JSON.stringify(value));
};

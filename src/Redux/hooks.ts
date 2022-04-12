import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// cf doc : https://react-redux.js.org/tutorials/typescript-quick-start
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

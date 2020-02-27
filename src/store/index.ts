/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./reducer";
import {createEpicMiddleware} from "redux-observable";
import rootEpic from "./epic";

export default function configureAppStore() {
  const epicMiddleware = createEpicMiddleware({});

  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware(),
      epicMiddleware,
    ]
  });

  epicMiddleware.run(rootEpic);

  return store;
}

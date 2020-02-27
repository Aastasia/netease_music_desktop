/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */

import {combineReducers} from "redux";
import {counterReducer} from "../container/demo/count/counterStore";
import {fetchReducer} from "../container/demo/fetch/fetchStore";

const rootReducer = combineReducers({
  counter: counterReducer,
  fetch: fetchReducer
});

export default rootReducer;

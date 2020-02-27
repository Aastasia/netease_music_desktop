/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */
import {combineEpics} from "redux-observable";
import {counterEpic} from "../container/demo/count/counterStore";
import {fetchEpic} from "../container/demo/fetch/fetchStore";

// For Example:
// export default combineEpics(pingEpic, fetchUserEpic);
const rootEpic = combineEpics(counterEpic, fetchEpic);

export default rootEpic;

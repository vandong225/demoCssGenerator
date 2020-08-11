import { combineReducers } from "redux";
import textShadowReducer from "./textShadowReducer";

const rootReducer = combineReducers({
  textShadow: textShadowReducer,
});

export default rootReducer;

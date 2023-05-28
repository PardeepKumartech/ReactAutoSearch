import AutoComplete from "./AutoComplete";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
  AutoComplete: AutoComplete,
});

export default allReducers;

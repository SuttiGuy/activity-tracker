import { combineReducers } from "redux";
import activitiesReducer from "./ActivittiesReducers";

const rootReducer = combineReducers({
    activities: activitiesReducer,
});

export default rootReducer; 
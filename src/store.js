import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import activitiesReducer from "./reducers/ActivittiesReducers";

const store = configureStore(
    {
        reducer: activitiesReducer,
    },
    composeWithDevTools
);

export default store;

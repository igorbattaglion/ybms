import { combineReducers } from 'redux';

import movies from "./movies";
import series from "./series";
import config from "./config";

export default combineReducers({
    movies,
    series,
    config
})
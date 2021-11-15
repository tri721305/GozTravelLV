import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import plans from "./plans";

export const reducers = combineReducers({ posts, auth, plans });

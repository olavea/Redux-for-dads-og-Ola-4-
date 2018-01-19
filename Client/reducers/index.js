import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
//import comments from './comments';

const rootReducer = combineReducers({posts, routing: routerReducer });

// routing is changes in url

export default rootReducer;

// removed from line 7 ", comments"


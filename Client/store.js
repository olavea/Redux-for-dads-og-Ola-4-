import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = { posts };
  //comments

const enhancers = compose(
  // if there is devTools ? we will run it devTools() otherwise : we will simply return the store itself
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// import hte route reducer
import rootReducer from './reducers/index';

// import mock data
import comments from './data/comments';
import posts from './data/posts';


//creat object

const defaultState = { 
    posts,
    comments
  };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
// export default history;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Landing from './components/landing/landing';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />;
        {/*<Route path="/landing" component={Landing} />*/}
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));

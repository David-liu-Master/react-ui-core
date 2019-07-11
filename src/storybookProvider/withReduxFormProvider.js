import React from 'react';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const withReduxForm = initialValues => storyFunc => {
  const reducers = { form: formReducer };
  const reducer = combineReducers(reducers);
  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
  const Test = reduxForm({ form: 'withReduxForm', initialValues })(storyFunc);
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
};

export default withReduxForm;

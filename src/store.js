import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store and also add redux-devtools
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// then run the saga
sagaMiddleware.run(rootSaga);

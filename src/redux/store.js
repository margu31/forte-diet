import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from './modules';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];
const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(...middlewares)));

export function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}

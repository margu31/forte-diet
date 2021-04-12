import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./modules";

const store = createStore(rootreducer, composeWithDevTools());

export function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}

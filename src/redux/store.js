import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

export default StoreProvider;

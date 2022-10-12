import "./App.css";
import FetchComp from "./FetchComp";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchComp />
      </div>
    </Provider>
  );
}

export default App;

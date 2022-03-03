import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import store from "state/store";
import "styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

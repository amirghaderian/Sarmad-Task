import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/Store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

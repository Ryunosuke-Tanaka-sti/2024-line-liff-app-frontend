import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./router/RouterConfig";

export const App = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
};

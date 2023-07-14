import ReactDOM from "react-dom/client";

import Router from "./pages/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Router />);

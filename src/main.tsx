import ReactDOM from "react-dom/client";
import Home from "./home";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Home />);
}

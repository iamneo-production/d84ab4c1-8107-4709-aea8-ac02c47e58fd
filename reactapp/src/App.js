import PageRoutes from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <PageRoutes />
      </Router>
    </>
  );
}

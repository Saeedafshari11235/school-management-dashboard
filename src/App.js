import Topbar from "./components/Topbar/Topbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      {router}
    </>
  );
}

export default App;

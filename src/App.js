import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import "./App.css"

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
      {router}
    </>
  );
}

export default App;

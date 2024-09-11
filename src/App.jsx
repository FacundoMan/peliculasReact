import "./App.css";
import { MyRoutes } from "./routers/routes";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MyRoutes></MyRoutes>
    </div>
  );
}

export default App;

import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import "./Sass/main.scss";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          {/* <div> */}
          <Route component={Home} path="/" exact />
          <Route component={NasaPic} path="/nasapic" />
          {/* </div> */}
          {/* <Home /> */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

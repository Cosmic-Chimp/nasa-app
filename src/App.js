import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import "./Sass/main.scss";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tic-Tac-UAP</title>
        <meta name="description" content="Tic Tac Ufo/UAP site" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      {/*  */}
      <AnimatePresence exitBeforeEnter>
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

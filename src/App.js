import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import "./Sass/main.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPic} path="/nasapic" />
        </div>
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

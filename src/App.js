import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
// import Nav from "./components/Nav";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPic} path="/nasapic" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

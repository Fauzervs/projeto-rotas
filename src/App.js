import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Mapas from "./components/Mapas";
import Temperatura from "./components/Temperatura";

function App() {
  return (
    <div className="App">
      <h1>Rotas</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Mapas />} path="/mapas" />
          <Route element={<Temperatura />} path="/temperatura" />
        </Routes>
      </BrowserRouter>
      {/*<Home></Home>
      <Mapas></Mapas>
      <Temperatura></Temperatura>*/}
    </div>
  );
}

export default App;

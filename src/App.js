import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" key="/" exact element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/cart" key="/cart" exact element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

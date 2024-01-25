import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/User/Login/Login";
import { Signup } from "./Components/User/Signup/Signup";
import { Home } from "./Components/Home/Home";
import { useSelector } from "react-redux";
import { Product } from "./Components/Products/Product/Product";

function App() {
  const token = useSelector((state) => state.token.token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Product />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

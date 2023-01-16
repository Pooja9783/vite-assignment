import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

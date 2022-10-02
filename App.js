// import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/LogIn" element={<Login />}></Route>
      

          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

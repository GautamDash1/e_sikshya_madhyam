import { BrowserRouter as Router , Routes, Route,Navigate} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/"  element={<Home />}/>  
            <Route exact path="/login"  element={<Login />}/>  
            <Route exact path="/signup"  element={<SignUp />}/>   
            <Route exact path="*"  element={<Navigate to="/" />}/>         
          </Routes>
      </Router>
    </>
  );
}

export default App;

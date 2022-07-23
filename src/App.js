import "./App.css";

import { Routes, Route } from "react-router-dom";
import Question from "./Pages/Question/Question";
import Weight from "./Pages/Weight/Weight";
import Height from "./Pages/Height/Height";
import Gender from "./Pages/Gender/Gender";
import Birthday from "./Pages/Birthday/Birthday";
import Plan from "./Pages/Plan/Plan";
import LandingPage from "./Pages/LandingPage/Landingpage";
import AfterLoginBody from "./Pages/AfterLoginMainPage/AfterLoginBody";
import Community from "./Pages/AfterLoginMainPage/Community";
import Jobs from "./Pages/Jobs/Jobs";
import {Main} from "./Pages/Loginpage/Main.jsx"
import Howitworks from "./Pages/Howitworks/Howitworks.jsx"
import Signup from "./Pages/Signup/Signup.jsx"
import RequireAuth from "./RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/weight" element={<Weight/>}/>
        <Route path="/height" element={<Height/>}/>
        <Route path="/gender" element={<Gender/>}/>
        <Route path="/birthday" element={<Birthday/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/home" element={<RequireAuth><AfterLoginBody/></RequireAuth>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Main/>}/>
        <Route path="/howitworks" element={<Howitworks/>}/>
      </Routes>

    </div>
  );
}

export default App;

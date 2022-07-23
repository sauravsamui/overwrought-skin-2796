import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar/Navbar";
// import Question from "./Pages/Question/Question";
// import Home from "./Pages/Question/Home";
// import Weight from "./Pages/Weight/Weight";
// import Height from "./Pages/Height/Height";
// import Gender from "./Pages/Gender/Gender";
// import Birthday from "./Pages/Birthday/Birthday";
// import Plan from "./Pages/Plan/Plan";
// import LandingPage from "./Pages/LandingPage/Landingpage";

import AfterLoginMainPageNavbar from "./component/Navbar/AfterLoginMainPageNavbar";

import AfterLoginBody from "./Pages/AfterLoginMainPage/AfterLoginBody";
import Community from "./Pages/AfterLoginMainPage/Community";
// import Jobs from "./Pages/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <AfterLoginBody />
      <Community />
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Question from "./Pages/Question/Question";
import Home from "./Pages/Question/Home";
import Weight from "./Pages/Weight/Weight";
// <<<<<<< HEAD
import LandingPage from "./Pages/LandingPage/Landingpage";
// =======
// >>>>>>> main
import AfterLoginMainPageNavbar from "./component/Navbar/AfterLoginMainPageNavbar";
import AfterLoginBody from "./Pages/AfterLoginMainPage/AfterLoginBody";

function App() {
  return (
    <div className="App">
      {/* <<<<<<< HEAD */}
      {/* <<<<<<< HEAD
      <AfterLoginMainPageNavbar />
      <AfterLoginBody />
=======
      {/* <Navbar/> */}
      {/* <Routes>
        <Route path='/' element={<LandingPage/>}/> */}
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/question' element={<Question/>}/>
        <Route path='/weight' element={<Weight/>}/>

      </Routes> */}

      {/* <AfterLoginMainPageNavbar /> */}
      {/* <AfterLoginBody /> */}

      {/* <Navbar/>
=======
      {/* <AfterLoginBody /> */}
      {/* <AfterLoginMainPageNavbar /> */}
      {/* <<<<<<< HEAD */}
      {/* <Navbar /> */}
      {/* >>>>>>> main */}

      {/* <Navbar/> */}

      {/* >>>>>>> main */}
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='/weight' element={<Weight/>}/> 
      // </Routes> */}
    </div>
  );
}

export default App;

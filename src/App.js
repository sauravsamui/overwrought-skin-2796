import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Question from "./Pages/Question/Question";
import Home from "./Pages/Question/Home";
import Weight from "./Pages/Weight/Weight";
import Height from "./Pages/Height/Height";
import Gender from "./Pages/Gender/Gender";
import Birthday from "./Pages/Birthday/Birthday";
import Plan from "./Pages/Plan/Plan";
import LandingPage from './Pages/LandingPage/Landingpage';
import AfterLoginMainPageNavbar from "./component/Navbar/AfterLoginMainPageNavbar";
import AfterLoginBody from "./Pages/AfterLoginMainPage/AfterLoginBody";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/question' element={<Question/>}/>
      <AfterLoginMainPageNavbar />
      <AfterLoginBody />
        <Route path='/weight' element={<Weight/>}/>
        <Route path='/height' element={<Height/>}/>
        <Route path='/gender' element={<Gender/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/plan' element={<Plan/>}/>

      </Routes> 

    

    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Question from "./Pages/Question/Question";
import Home from "./Pages/Question/Home";
import Weight from "./Pages/Weight/Weight";
import AfterLoginMainPageNavbar from "./component/Navbar/AfterLoginMainPageNavbar";
import AfterLoginBody from "./Pages/AfterLoginMainPage/AfterLoginBody";

function App() {
  return (
    <div className="App">
      {/* <<<<<<< HEAD */}
      <AfterLoginMainPageNavbar />
      <AfterLoginBody />
      {/* <Navbar/>
=======
      {/* <AfterLoginBody /> */}
      {/* <AfterLoginMainPageNavbar /> */}
      <Navbar />
      {/* >>>>>>> main */}
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='/weight' element={<Weight/>}/> 
      </Routes> */}
    </div>
  );
}

export default App;

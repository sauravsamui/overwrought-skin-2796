
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Question from './Pages/Question/Question';
import Home from './Pages/Question/Home';
import Weight from './Pages/Weight/Weight';
import Homepage from './Pages/LandingPage/Landingpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/question' element={<Question/>}/>
      <Route path='/weight' element={<Weight/>}/>


      </Routes>


    </div>
  );
}

export default App;

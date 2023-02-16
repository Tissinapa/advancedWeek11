//import logo from './logo.svg';
import './App.css';
import MyContainer from "./components/MyContainer"
import Header from "./components/Header"
import About from "./components/About"
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<><MyContainer/><Header/>  </>}></Route>
          <Route path='/about' element={<><About/><Header/> </>} />
        </Routes>
      </div>
    </Router>

  );
}

 




export default App;

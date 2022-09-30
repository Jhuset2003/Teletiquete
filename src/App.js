import './App.scss';
import {
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom";
import { LandingPage } from './Pages/LandingPage';
import History from './Pages/History';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/History" element={<History/>} />
        </Routes> 

      </BrowserRouter>
    </div>
    
    
  );
}

export default App;

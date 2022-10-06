import './App.scss';
import {
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom";
import { LandingPage } from './Pages/LandingPage';
import History from './Pages/History';
import InfoProvider from "./Components/Context/InfoContext.jsx";


function App() {
  return (
    <InfoProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/History" element={<History/>} />
          </Routes> 

        </BrowserRouter>
      </div>
    </InfoProvider>
    
  );
}

export default App;

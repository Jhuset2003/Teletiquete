import './App.scss';
import {
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom";

import History from './Pages/History';
import { Home } from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/History" element={<History/>} />
        </Routes> 

      </BrowserRouter>
    </div>
    
    
  );
}

export default App;

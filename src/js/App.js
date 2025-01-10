import './../styles/App.css';
import Landing from './pages/landing';
import Contact from './pages/contact';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
   <div className="container px-14">

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
   </div>

   
        
  );
}

export default App; 

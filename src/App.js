import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointments from "./Pages/Appointments/Appointments";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
function App() {
  return (
    <>
    <Header />
    <Routes>
        {/* reveal routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* protected routes  */}

    </Routes>
    <Footer />
      
    </>
  );
}

export default App;

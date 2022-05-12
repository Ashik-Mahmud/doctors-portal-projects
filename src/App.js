import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import useFirebase from "./Hooks/useFirebase";
import About from "./Pages/About/About";
import Appointments from "./Pages/Appointments/Appointments";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import MyAppointments from "./Pages/MyAppointments/MyAppointments";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
export const AuthContext = createContext(null)
function App() {
    const { isAuth, user } = useFirebase();
    const [isTheme, setIsTheme] = useState(false)
    
    
useEffect(()=>{
    console.log(isTheme);
    
}, [isTheme])
     
  return (
    <>
    <Toaster />
   <section data-theme={`night`}>
    <AuthContext.Provider  value={{isAuth, user}}>
            <Header setTheme={setIsTheme} />
            <Routes>
                {/* reveal routes  */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                
                {/* protected routes  */}
                <Route path="/my-appointments" element={<RequireAuth><MyAppointments /></RequireAuth>} />

            </Routes>
            <Footer />
        </AuthContext.Provider>
   </section>
    </>
  );
}

export default App;

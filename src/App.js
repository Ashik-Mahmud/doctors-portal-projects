import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAdmin from "./Auth/RequireAdmin";
import RequireAuth from "./Auth/RequireAuth";
import useFirebase from "./Hooks/useFirebase";
import About from "./Pages/About/About";
import AddDoctor from "./Pages/AddDoctor/AddDoctor";
import Appointments from "./Pages/Appointments/Appointments";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import DoctorsList from "./Pages/DoctorsList/DoctorsList";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import MyAppointments from "./Pages/MyAppointments/MyAppointments";
import Reviews from "./Pages/Reviews/Reviews";
import Users from "./Pages/Users/Users";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
export const AuthContext = createContext(null)
function App() {
    const { isAuth, user } = useFirebase();

    const [isTheme, setIsTheme] = useState(JSON.parse(localStorage.getItem("theme")))
    const themeToggle = () =>{
        setIsTheme(prev => !prev)
        localStorage.setItem("theme", !isTheme);
    }    
   
  return (
    <>
    <Toaster />
   <section data-theme={`${isTheme && "night"}`}>
    <AuthContext.Provider  value={{isAuth, user}}>
            <Header themeToggle={themeToggle} />
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
                <Route path="/checkout/:checkOutId" element={<RequireAuth><Checkout /></RequireAuth>} />
                <Route path="/users" element={<RequireAuth><RequireAdmin><Users /></RequireAdmin></RequireAuth>} />
                <Route path="/add-doctor" element={<RequireAuth><RequireAdmin><AddDoctor /></RequireAdmin></RequireAuth>} />
                <Route path="/doctor-list" element={<RequireAuth><RequireAdmin><DoctorsList /></RequireAdmin></RequireAuth>} />

            </Routes>
            <Footer />
        </AuthContext.Provider>
   </section>
    </>
  );
}

export default App;

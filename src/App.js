import './App.css';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import AboutJubilee from "./pages/aboutJubilee/AboutJubilee";
import AboutBible from "./pages/AboutBible/AboutBible";

function App() {
    const auth = false;

    return (

        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about-jubilee" element={<AboutJubilee/>}/>
                <Route path="/about-Bijbel" element={<AboutBible/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login-profile" element={auth === true ? <Profile/> : <Navigate to="/"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

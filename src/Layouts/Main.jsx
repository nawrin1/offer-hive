import { Outlet } from "react-router-dom";
import img1 from '../assets/wave.svg'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
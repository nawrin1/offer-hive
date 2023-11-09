import { Link, NavLink, useNavigate } from "react-router-dom";
import {SiWorkplace} from 'react-icons/si'
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const Navbar = () => {
    const{user,logOut}=useContext(AuthContext)
    console.log(user,"userr")
    const navigate=useNavigate()

    const navlinks=<>
    <li className="font-Sora font-medium"><NavLink to='/'>Home</NavLink></li>
{user && <>
    <li className="font-Sora font-medium"><NavLink to='/add'>Add Job</NavLink></li>
    <li className="font-Sora font-medium"><NavLink to='/posted'>My Posted Job</NavLink></li>
    <li className="font-Sora font-medium"><NavLink to='/myBids'>My Bids</NavLink></li>
    <li className="font-Sora font-medium"><NavLink to='/request'>Bids Requests</NavLink></li></>}
    
    </>
    const handleLogOut=()=>{
        logOut()
        .then(() => {
       
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'logged out successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        })
        .catch(error => console.error (error))


    }
    return (
        <div className="nav">
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navlinks}
                </ul>
                </div>
                <p className="btn btn-ghost normal-case lg:text-2xl md:text-2xl text-[14px] font-Sora font-semibold"><SiWorkplace className="font-semibold"></SiWorkplace>Offer Hive</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}

                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link to='/login'><p className="btn font-Sora font-medium">Login</p></Link> */}
                {user?<>
                <h1 className="font-Sora font-medium focus-visible: ">{`${user.displayName}`}</h1>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                    </label>
                    <Link to='/login'><button onClick={handleLogOut} className="font-Sora font-medium">LogOut</button></Link>

                    </>:
            <>
                    <Link to='/login'><button className="btn font-Sora font-medium text-[13px] md:text-[14px] lg:text-[14px]">Login</button></Link>
                
                      
            </>
            }
            </div>
            </div>
            
        </div>
    );
};

export default Navbar;
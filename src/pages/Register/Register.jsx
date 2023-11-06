

import { Link, useNavigate } from "react-router-dom";
import img1 from '../../assets/6300959.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
const Register = () => {
    const{createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        
        const photo=e.target.photo.value
        console.log(name,email,password,photo)
        createUser(email,password)
        .then(result=>{
            
            
             
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your have registered successfully',
                showConfirmButton: false,
                timer: 950
            })
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo
            })
            console.log(result.user)


            // location.reload()
            navigate('/')
            location.reload()
 
        })
        .catch(error=>{
            console.error(error)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Registration failed, try again',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    return (
        <div>
        <div className="hero min-h-screen  font-Sora py-20">
        <div className="hero-content flex  justify-center mx-auto lg:flex-row-reverse">
            <div className="text-center lg:text-left hidden lg:block md:block flex-1 ">
            
            <img src={img1} className="lg:w-[70%] md:w-[90%]" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-100 flex-1 lg:ml-48">
                <h2 className="font-Sora text-3xl text-center mt-6 font-medium">Register Now</h2>
            <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="font-Sora text-center pb-6">Have an account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default Register;
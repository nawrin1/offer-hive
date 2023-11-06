import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import logins from '../../assets/Animation - 1699200707611.json'
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
    const{loginUser,google}=useContext(AuthContext)
    const location=useLocation()
    
    const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        loginUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have logged in Succesfully',
                showConfirmButton: false,
                timer: 1500
            })
            // navigate('/')
            
            
            navigate(location?.state? location.state:'/')  
        })
        .catch(error => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Invalid Email or Password',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        })

    }
    const handleGoogleLogin=()=>{
        console.log('google clicked')
        google()
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logged in with google',
                showConfirmButton: false,
                timer: 1500
            })
            // navigate('/')
            navigate(location?.state? location.state:'/')
        })
        .catch(error=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
            
        })
        
    }
    return (
                <div>
                    <div className="hero min-h-screen bg-base-200 font-Sora py-20">
        <div className="hero-content flex  lg:flex-row-reverse">
            <div className="text-center lg:text-left hidden lg:block md:block">
            
            <Lottie animationData={logins} loop={true} />;
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                <h2 className="text-center font-medium font-Sora pt-7 text-3xl">Login Now</h2>
            <form className="card-body" onSubmit={handleLogin}>
                
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
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="flex justify-center mx-auto w-[85%]"><button className="btn w-full  font-Sora" onClick={handleGoogleLogin}>Login with Google</button></div>
            <p className="font-Sora text-center pb-6">Do not have any account?<Link to='/register'>Register</Link></p>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default Login;

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { InfinitySpin } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <InfinitySpin 
        width='200'
        color="#4fa94d"
      />
    }
    if(user){
        return children
    }
    return <Navigate  state={location.pathname} to="/login"></Navigate>;
    }


export default PrivateRoute;
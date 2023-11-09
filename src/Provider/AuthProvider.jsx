
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
const auth=getAuth(app)
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    const provider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const google=()=>{
        console.log('google')
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('cur user',currentUser)
            setUser(currentUser)
            setLoading(false)
            const userEmail=currentUser?.email || user?.email
            const loggedUser={email:userEmail}
            
            
            
            if (currentUser){
              
                axios.post(`https://online-marketplace-server-beta.vercel.app/jwt`,loggedUser,{withCredentials:true})
                .then(res=>{console.log('token respomse',res.data)})
                

            }
            else{
                axios.post('https://online-marketplace-server-beta.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>{console.log(res.data)})


            }
            
            

        })
        return () => {
            unSubscribe();
        }
    },[])






    const info={user,createUser,loading,google,logOut,loginUser}
    return (
        <AuthContext.Provider value={info}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
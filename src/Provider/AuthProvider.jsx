
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from "../firebase/firebase.config";
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
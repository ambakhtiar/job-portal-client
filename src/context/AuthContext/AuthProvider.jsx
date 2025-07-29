import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutuser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('State Captured : ', currentUser);

            // JWT 
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://job-portal-server-seven-mu.vercel.app/jwt', user, {
                    withCredentials: true
                }).then(res => {
                    console.log('login ', res.data);
                    setLoading(false);
                })
            } else {
                axios.post('https://job-portal-server-seven-mu.vercel.app/logout', {}, {
                    withCredentials: true
                }).then(res => {
                    console.log('logout ', res.data);
                    setLoading(false);
                })
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authinfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutuser,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import innitializationapp from '../firebase/firebase.init';

innitializationapp();
const useFirebase = () => {
    const auth = getAuth();
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return {
        users,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading,
        setUsers
    };
};

export default useFirebase;
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { auth } from '../adapters/firebase.adapter';

export const createNewUser = async (email: string, password: string) => {
    let user;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential : UserCredential) => {
            user = userCredential.user;
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
    
    return user;
}

export const login = async (email: string, password: string) => {
    let user;
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential : UserCredential) => {
            user = userCredential.user;
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
    
    return user;
}

export const closeFirebaseSession = async () =>{
    await signOut(auth)
        .then(() => {
            console.log("logout successful");
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
}
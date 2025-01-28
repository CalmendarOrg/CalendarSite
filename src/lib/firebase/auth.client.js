import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getUserInfo } from './database.client';

export async function loginWithGoogle() {
    const auth = getAuth();
    const userCredntial = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredntial.user;
}

export async function logout(){
    await signOut(getAuth());
}

export async function registerEmailPassword(email, password){
    const auth = getAuth();
    const userCredntial = await createUserWithEmailAndPassword(auth, email, password);
    return userCredntial.user;
}

export async function signInEmailAndPassword(email, password){
    const auth = getAuth();
    const userCredntial = await signInWithEmailAndPassword(auth, email, password);
    return userCredntial.user;
}

export async function getUserData(){
    const user = getAuth().currentUser;
    
    try {
        let name = await getUserInfo(user.uid);
        return {name: name, photoURL: user.photoURL};
    } catch (error) {
        return {name: 'Error', photoURL: user.photoURL};
    }    
}
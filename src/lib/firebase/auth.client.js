import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export async function loginWithGoogle() {
    const auth = getAuth();
    const userCredntial = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredntial.user;
}

export async function logout(){
    await signOut(getAuth());
}

export async function registerEmailPassword(email, password){
    const userCredntial = await createUserWithEmailAndPassword(getAuth(), email, password);
    return userCredntial.user;
}

export async function signInEmailAndPassword(email, password){
    const userCredntial = await signInWithEmailAndPassword(getAuth(), email, password);
    return userCredntial.user;
}

export function getUserData(){
    const user = getAuth().currentUser;    
    return {userName: user.displayName, photoURL: user.photoURL};
}
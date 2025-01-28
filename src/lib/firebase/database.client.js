import { collection, doc, setDoc, getDoc  } from "firebase/firestore"; 
import { db } from "./firebase.client";

export async function setUser(user){
    let name = user.displayName === null ? user.email : user.displayName;
    
    const users = collection(db, 'users');
    await setDoc(doc(users, user.uid), {
        userId: user.uid,
        name: name,   
    })
}

export async function getUserInfo(userId){
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data().name;       
    else return "Guest";      
}
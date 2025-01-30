import { collection, doc, setDoc, getDoc  } from "firebase/firestore"; 
import { db } from "./firebase.client";

export async function setUser(user, name){
    const users = collection(db, 'users');    
    const docSnap = await getDoc(doc(users, user.uid));
    
    if (!docSnap.exists()){
        await setDoc(doc(users, user.uid), {
            userId: user.uid,
            name: name, 
            tagsIds: []
        })
    } 
}

export async function getUserInfo(userId){
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data().name;       
    else return "Guest";      
}

export async function getUserTags(userId){
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    const tagsIds = docSnap.data().tagsIds;
    
    const tagsPromises = tagsIds.map(async (tagId) => {
        const tagsRef = doc(db, 'tags', tagId);
        const tagsSnap = await getDoc(tagsRef);
        return { title: tagsSnap.data().title, color: tagsSnap.data().color, tagId: tagsSnap.data().tagId};
    });

    const tagsTitles = await Promise.all(tagsPromises); 
    return tagsTitles;
}

export async function getUserTasks(userId){
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    const tagsIds = docSnap.data().tagsIds;
    
    const tagsPromises = tagsIds.map(async (tagId) => {
        const tagsRef = doc(db, 'tags', tagId);
        const tagsSnap = await getDoc(tagsRef);        
        return tagsSnap.data().tasksIds;
    });

    const tasksIds = await Promise.all(tagsPromises); 

    return tasksIds;
}

export async function getTaskDate(taskId){
    const docRef = doc(db, 'tasks', taskId);
    const docSnap = await getDoc(docRef);
    return docSnap.data().date;
}

export async function getTaskInfo(taskId){
    const docRef = doc(db, 'tasks', taskId);
    const docSnap = await getDoc(docRef);
    return {title: docSnap.data().title, description: docSnap.data().description}
}
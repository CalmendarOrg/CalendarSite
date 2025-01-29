import { db } from "$lib/firebase/firebase.server";
import { updateTagTasks } from "$lib/firebase/database.server";

export async function load() {  
    const count = await db.collection('users').count().get();
    
    try{
        //const test = await updateTagTasks( "VpQ3MA3OvQ5squ4rhXcd", 2)
        //console.log(test);
    }catch(e){
        console.log(e);
    }
    
    return {
        count: count.data().count
    }
}
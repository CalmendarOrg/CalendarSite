import { db } from "$lib/firebase/firebase.server";
import { addNewTag, addNewTask } from "$lib/firebase/database.server";
import { redirect } from '@sveltejs/kit';

export async function load() {  
    const count = await db.collection('users').count().get();
    
    try{
        //const test = await addNewTag("Drugi Tag", "#00FF00", 'zPPkYIaQDZZF5rO3MwD4HyQ6Ipe2');
        //console.log(test);
    }catch(e){
        console.log(e);
    }
    
    return {
        count: count.data().count
    }
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	addTag: async ({request}) => { 
        const data = await request.formData()
        const tagName = data.get('tagName');
        const tagColor = data.get('tagColor');
        const userId = data.get('userId');
        
        console.log(userId);
        if(tagName.length < 2){
            //$newTaskErrorsStore.tagNameErr = 'Nazwa musi zawierać przynajmniej 2 znaki';
        }else{
            await addNewTag(tagName, tagColor, userId);
        }       
        
        redirect(303, '/');
	},

    addTask: async ({request}) => {
		const data = await request.formData()
        const taskName = data.get('taskName');
        const taskDate = data.get('taskDate');
        const tagId = data.get('tags');
        const taskDesc = data.get('taskDesc');

        if(taskName === '' || taskDate === '' || taskDesc === '' || tagId === ''){

        }else{          
            await addNewTask({title: taskName, date: taskDate, description: taskDesc}, tagId);
        }
        
        redirect(303, '/');
	},
};
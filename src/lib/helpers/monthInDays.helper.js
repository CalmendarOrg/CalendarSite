import { getUserTasks, getTaskDate } from "$lib/firebase/database.client";
import authStore from "$lib/stores/auth.store";
import { get } from "svelte/store";

export async function getMonthDays(thisMonth){
    const days = []; 

    const { isLoggedIn, userId } = get(authStore);

    let userTasks;
    if(isLoggedIn){
        const taskIds = await getUserTasks(userId)
        userTasks = await Promise.all(
        taskIds.flat().map(async (taskId) => {
            return { taskId: taskId, date: await getTaskDate(taskId) };
        }));
    }
    
 
    let date = new Date(thisMonth);
    let endOfMonth = false;
    
    while(true){
        const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        
        const tasksInDay = [];
        if(isLoggedIn){
            userTasks.forEach(element => {
                if(element.date === dateString){
                    tasksInDay.push(element.taskId);
                }
            })
        }     

        days.unshift({day: date.getDate(), otherMonth: endOfMonth, date: dateString, tasksIds: tasksInDay});      
        
        if(date.getDate() === 1) endOfMonth = true;       
        if(endOfMonth && date.getDay() === 1) break;
        
        date.setDate(date.getDate() - 1);
    }

    endOfMonth = false;
    date = new Date(thisMonth);
    
    while(true){        
        date.setDate(date.getDate() + 1);
        const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' +date.getDate()).slice(-2);
        
        const tasksInDay = [];
        if(isLoggedIn){
            userTasks.forEach(element => {
                if(element.date === dateString){
                    tasksInDay.push(element.taskId);
                }
            })
        }    
        
        if(date.getMonth() !== thisMonth.getMonth()) endOfMonth = true;       
        if(endOfMonth && date.getDay() === 1) break;       
        
        days.push({day: date.getDate(), otherMonth: endOfMonth, date: dateString, tasksIds: tasksInDay});
    }

    return days;
}
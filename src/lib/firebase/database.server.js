import pkg from 'firebase-admin';
const {firestore} = pkg;
import { db } from "./firebase.server";

export async function addNewTag(tagTitle) {
    const tagCollection = db.collection('tags');
    const tagRef = await tagCollection.add({
        title: tagTitle,
        tasksIds: []
    });

    return tagRef.id;
}

export async function addNewTask(task) {
    const taskCollection = db.collection('tasks');
    const taskRef = await taskCollection.add({
        title: task.title,
        date: task.date,
        description: task.description,
    });

    console.log(taskRef);

    return taskRef.id;
}

export async function updateTagTasks(tagId, taskId) {
    const tagRef = await db.collection('tags').doc(tagId);
    const prevIds = (await tagRef.get()).data().tasksIds;

    await tagRef.update({
        tasksIds: [...prevIds, taskId]
    });
}
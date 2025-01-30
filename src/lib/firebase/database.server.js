import { db } from "./firebase.server";

export async function addNewTag(tagTitle, color, userId) {
    const tagCollection = db.collection('tags');
    const tagRef = await tagCollection.add({
        title: tagTitle,
        color: color,
        tasksIds: []
    });

    tagRef.update({
        tagId: tagRef.id
    })

    const userRef = await db.collection('users').doc(userId);
    console.log((await userRef.get()).data());
    const prevIds = (await userRef.get()).data().tagsIds;
    console.log(prevIds);

    await userRef.update({
        tagsIds: [...prevIds, tagRef.id]
    });
}


export async function addNewTask(task, tagId) {
    const taskCollection = db.collection('tasks');
    const taskRef = await taskCollection.add({
        title: task.title,
        date: task.date,
        description: task.description,
    });

    taskRef.update({
        taskId: taskRef.id
    })

    const tagRef = db.collection('tags').doc(tagId);
    const prevIds = (await tagRef.get()).data().tasksIds;

    await tagRef.update({
        tasksIds: [...prevIds, taskRef.id]
    });
}
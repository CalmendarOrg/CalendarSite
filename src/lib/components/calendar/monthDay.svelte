<script>
	import { onMount } from "svelte";
    import { getTaskInfo } from "$lib/firebase/database.client";

    let { dayNumber, date, rightBorder, darkerBg, outOfMonth, dayTasks} = $props();

    let okej = $state([])
    onMount(async() => {
        dayTasks.forEach(async (taskId) => {
            okej.push(await getTaskInfo(taskId))
        });       
    })
</script>

<div class="calendarBorders" class:rightBorder class:darkerBg class:outOfMonth>
    <h2>{dayNumber}</h2>
    {#each dayTasks as task}
        <h3>{task}</h3>
    {/each}
</div>

<style>
    .calendarBorders{
        text-align: right;
        position: relative;
    }

    .calendarBorders h2{
        margin: 0px;
        margin-right: 15px;
        margin-top: 12px;
    }

    .outOfMonth{
        color: rgb(143, 143, 143);
    }

    :global(.darkerBg){
        background-color: rgba(230, 230, 230, 0.527);
    }

    :global(.calendarBorders){
        border-left: 2px solid black;
        transform-style: preserve-3d;
    }

    :global(.rightBorder){
        border-right: 2px solid black;
    }

    :global(.calendarBorders::after){
        content: "";
        position: absolute;
        height: 2px;
        background: black;
        top: 100%;
        width: 86%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
</style>
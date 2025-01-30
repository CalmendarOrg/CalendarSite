<script>
	import NewTaskButton from "$lib/components/buttons/newTaskButton.svelte";
	import TagButton from "$lib/components/buttons/tagButton.svelte";
	import Calendar from "$lib/components/calendar/calendar.svelte";
	import Header from "$lib/components/header.svelte";
    import { getMonthDays } from "$lib/helpers/monthInDays.helper";
	import authStore from "$lib/stores/auth.store";
	import { count } from "firebase/firestore";
	import { onMount } from "svelte";

    /** @type {import('./$types').PageProps} */
	let { data, form } = $props();  

    let hide = $state(false);
    function changeLeftMenu(){
        if(hide === true) hide = false;
        else hide = true;
    }

    const date = new Date();
    let month = $state([]);

    onMount(async () => {
        month = await getMonthDays(date);
    });

    async function changeMonthDays(monthShift){
        date.setDate(1);
        date.setMonth(date.getMonth() + monthShift);
        month = await getMonthDays(date);
    }

    async function refreshMonthDays(){
        month = await getMonthDays(date);
    }

</script>

<div class="box">
    <Header {changeLeftMenu} {changeMonthDays}/>
    <main>
        <div class="leftMenu" class:hide>
            <NewTaskButton {hide}/>
            {#if form?.success} 
                {alert("Pomyślnie dodano nowe zadanie")}
                <span style="display: none;">{refreshMonthDays()}</span>
            {/if}
            {#if form?.incorrect} {alert("Niepoprawne dane w formularzu")} {/if}
            <TagButton {hide} tagColor = "Blue"/>           
        </div>
        <Calendar {month}/>
        {#if $authStore.isLoggedIn}
            <span style="display: none;">{refreshMonthDays()}</span>
        {:else}
            <span style="display: none;">{refreshMonthDays()}</span>
        {/if}
    </main>
</div>

<style>
    :global(*){
        font-family: "Kulim Park", serif;
    }
    
    :global(html){
        height: 100%;
        background-color: rgb(252, 252, 252);
    }
    
    :global(body){
        margin: 0px;
        height: 100%;
    }

    .box{
        display: flex;
        flex-flow: column;
        height: 100%;
    }

    main{
        width: 100%;
        flex: 1 1 auto;
        display: flex;
    }

    main .leftMenu{
        width: 290px;
        margin: 0px 15px;
        transition: width 200ms ease-in-out;  
        display: flex;
        flex-direction: column;
        align-items: center;         
    }

    main .hide{
        width: 0px;
        transition: width 200ms ease-in-out;
    }
    
</style>
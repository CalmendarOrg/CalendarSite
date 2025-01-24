<script>
	import NewTaskButton from "$lib/components/buttons/newTaskButton.svelte";
	import TagButton from "$lib/components/buttons/tagButton.svelte";
	import Calendar from "$lib/components/calendar/calendar.svelte";
	import Header from "$lib/components/header.svelte";
    import { getMonthDays } from "$lib/helpers/monthInDays.helper";

    let hide = $state(false);
    function changeLeftMenu(){
        if(hide === true) hide = false;
        else hide = true;
    }

    const date = new Date();
    let month = $state(getMonthDays(date)); 
    function changeMonthDays(monthShift){
        date.setMonth(date.getMonth() + monthShift);
        month = getMonthDays(date);
    }

</script>

<div class="box">
    <Header {changeLeftMenu} {changeMonthDays}/>
    <main>
        <div class="leftMenu" class:hide>
            <NewTaskButton {hide}/>
            <TagButton {hide} tagColor = "Blue"/>
        </div>
        <Calendar {month}/>
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
    }

    main .hide{
        width: 0px;
        transition: width 200ms ease-in-out;
    }
    
</style>
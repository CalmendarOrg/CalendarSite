<script>
    import ProfileWindow from "$lib/components/profileWindow.svelte";  
	import NewTaskButton from "$lib/components/buttons/newTaskButton.svelte";
	import TagButton from "$lib/components/buttons/tagButton.svelte";
	import Calendar from "$lib/components/calendar/calendar.svelte";
	import Header from "$lib/components/header.svelte";

    let hide = $state(false);
    function changeLeftMenu(){
        if(hide === true) hide = false;
        else hide = true;
    }
</script>

<div class="box">
    <Header {changeLeftMenu}/>
    <main>
        <div class="leftMenu" class:hide>
            <NewTaskButton {hide}/>
            <TagButton {hide} tagColor = "Blue"/>
        </div>
        <Calendar />
    </main>
</div>

<style>
    :global(*){
        font-family: "Kulim Park", serif;
    }
    
    :global(html){
        height: 100%;
        background-color: rgb(250, 250, 250);
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
        transition: width 200ms ease-in-out;           
    }

    main .hide{
        width: 0px;
        transition: width 200ms ease-in-out;
    }
    
</style>
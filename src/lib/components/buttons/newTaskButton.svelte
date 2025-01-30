<script>
    import plusIcon from "$lib/icons/plus.png"
    import addTaskStore from "$lib/stores/addTask.store";
    import authStore from "$lib/stores/auth.store";

    let { hide} = $props();
    let disabled = $state();

    function handleClick(){
        if($authStore.isLoggedIn){
            addTaskStore.set(true);
        }      
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<button class="createNewTask" class:hideButton = {hide} onclick={handleClick} class:disabled = {!$authStore.isLoggedIn} disabled={!$authStore.isLoggedIn}>
    <img src={plusIcon} alt="+"><h2>Dodaj zadanie</h2>
</button>

<style>    
    .createNewTask{
        position: relative;
        display: flex;
        align-items: center;
        justify-self: center;
        justify-content: center;
        width: max-content;
        padding: 15px 15px;
        border: 2px solid lightgrey;
        margin-top: 50px;
        right: 0px;
        transition: right 200ms ease-in-out;
        background-color: whitesmoke;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .createNewTask:hover{
        cursor: pointer;
    }

    .createNewTask img{
        width: 22px;
        height: 22px;
        margin-right: 10px;
    }

    .createNewTask h2{
        margin: 0px;
        font-size: 22px;
    }

    .hideButton{
        right: 290px;
        transition: right 200ms ease-in-out;
    }

    .disabled:hover{
        cursor: not-allowed;
    }
</style>
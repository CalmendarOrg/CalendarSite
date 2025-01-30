<script>
    import LoginPopUp from "$lib/components/auth/loginPopUp.svelte";  
	import NewTaskPopUp from "$lib/components/newTaskPopUp.svelte";
    import "$lib/firebase/firebase.client";
    import logInStore from "$lib/stores/logIn.store";
    import addTaskStore from "$lib/stores/addTask.store";

    let { children } = $props();
</script>

{#if $logInStore}
    <LoginPopUp />
{/if}

{#if $addTaskStore}
    <NewTaskPopUp />
{/if}


{@render children()}
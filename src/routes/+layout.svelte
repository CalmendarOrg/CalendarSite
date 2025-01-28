<script>
    import LoginPopUp from "$lib/components/auth/loginPopUp.svelte";  
    import "$lib/firebase/firebase.client";
    import authStore from "$lib/stores/auth.store";
    import logInStore from "$lib/stores/logIn.store";

    let { children } = $props();
    //let showLoginPopUp = $state(true);
</script>

{#if $logInStore}
    <LoginPopUp />
{/if}

{@render children()}
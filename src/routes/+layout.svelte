<script>
    import LoginPopUp from "$lib/components/auth/loginPopUp.svelte";  
    import "$lib/firebase/firebase.client";
    import authStore from "$lib/stores/auth.store";

    let { children } = $props();
    //let showLoginPopUp = $state(true);
</script>

{#if !$authStore.isLoggedIn}
    <LoginPopUp />
{/if}

{@render children()}
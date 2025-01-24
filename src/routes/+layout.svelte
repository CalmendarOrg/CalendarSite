<script>
    import LoginPopUp from "$lib/components/auth/loginPopUp.svelte";
    
    // import "$lib/firebase/firebase.client"; - NAPRAWIĆ BO NIE DZIAŁA !!!!!!

    let { children } = $props();
    let showLoginPopUp = $state(false);
</script>

{#if showLoginPopUp}
    <LoginPopUp />
{/if}

{@render children()}
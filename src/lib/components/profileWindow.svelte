<script>
    import settingsIcon from "$lib/icons/settingIcon.png";
    import logoutIcon from "$lib/icons/logoutIcon.png";
    import { logout } from "$lib/firebase/auth.client";
    import authStore from "$lib/stores/auth.store";
	import { onMount } from "svelte";
    import { getUserData } from "$lib/firebase/auth.client";

    let { showProfile = $bindable() } = $props();
    let userInfo = $state({name: '', photoURL: ''});
    
    async function handleLogout(){
        try {
            await logout();
            showProfile = false;
        } catch (error) {
            console.log(error);
        }
    }

    onMount(async () => {
        userInfo = await getUserData();   
    })

</script>

<div class="profileWindow">
    <h2>{userInfo.name}</h2>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="profileOptions">
        <div class="settings">
            <img src={settingsIcon} alt="Settings Icon" class="img"><p>Ustawienia</p>
        </div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="logOut" onclick={handleLogout}>
            <img src={logoutIcon} alt="Logout Icon" class="img"><p>Wyloguj się</p>
        </div>
    </div>     
</div>

<style>
    .img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .profileWindow{
        width: 430px;
        height: 85px;
        background-color: lightgray;
        position: relative;
        right: 355px;
        top: -10px;
        transform: translateZ(-10px);
        display: flex;
        flex-direction: column;
        box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    }

    .profileWindow h2{       
        text-align: center;
        font-size: 25px;
        margin-top: auto;
        margin-bottom: 5px;
        margin-right: 45px;
    }

    .profileOptions{
        display: flex;
        font-size: 18px;
        font-weight: 400;
        justify-items: center; 
        margin-bottom: auto;
        margin-top: 5px;
    }

    .profileOptions .settings{
        margin-left: 50px;
        display: flex;
        align-items: center;
        transition: all 200ms;
    }

    .profileOptions .logOut{
        margin-left: 50px;
        display: flex;
        align-items: center;
        transition: all 200ms;
    }

    .profileOptions .logOut:hover, .settings:hover{
        cursor: pointer;
        transform: scale(1.04);
        transition: all 200ms;
    }
    
    .profileOptions p{
        margin: 0px;
    }   
</style>
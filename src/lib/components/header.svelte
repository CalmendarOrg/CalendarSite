<script>
    import placeholderImage from "$lib/icons/worldface-british-guy-white-background.jpg";
    import leftArrow from "$lib/icons/left-arrow.png";
    
    import ProfileWindow from "$lib/components/profileWindow.svelte"; 
    import { showMonthName } from "$lib/helpers/monthName.helper";
    
    let { changeLeftMenu } = $props();
    
    let currentDateToShow = $state(new Date());

    function changeDate(monthShift){
        currentDateToShow.setMonth(currentDateToShow.getMonth() + monthShift);
        currentDateToShow = new Date(currentDateToShow);
    }

    let showProfile = $state(false);
    function changeProfileVisibility(){
        showProfile = showProfile ? false : true;
    }
    
</script>

<header>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="burger" onclick={changeLeftMenu}>

    </div>

    <div class="name">
        <p>Cal(m)endar</p>
    </div>

    <div class="month">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img src={leftArrow} alt="<" id="leftArrow" class="arrow" onclick={() => changeDate(-1)}>
        <p>{showMonthName(currentDateToShow.getMonth() + 1)} {currentDateToShow.getFullYear()}</p>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img src={leftArrow} alt=">" id="rightArrow" class="arrow rotate" onclick={() => changeDate(1)}>
    </div>
    
    <div class="profile">
        {#if showProfile}
            <ProfileWindow/>
        {/if}    
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img src={placeholderImage} alt="Profile" id="profilePicture" class:showProfile onclick={changeProfileVisibility}>   
    </div>
</header>

<style>
    header{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
    }

    header .burger{
        height: 55px;
        width: 55px;
        display: block;
        margin-left: 25px;
        background-color: aquamarine;
        transition: background-color 200ms linear;
    }

    header .burger:hover{
        cursor: pointer;
        background-color: darkcyan;
        transition: background-color 200ms linear;
    }

    header .name{
        margin-left: 25px;
        font-size: 30px;
        font-weight: bold;
    }
    
    header .name p{
        margin: auto;
    }

    header .month{
        margin-right: auto;
        margin-left: auto;
        font-size: 35px;
        font-weight: bold;
        display: flex;
        width: 380px;
    }

    header .month p{
        margin: 0px auto;
        align-self: center;
    }

    header .month .arrow{
        height: 30px;
        width: 30px;
        align-self: center;
    }

    header .month .arrow:hover{
        cursor: pointer;
    }

    header .month #leftArrow{
        margin-left: 0px;
    }

    header .month #leftArrow{
        margin-right: 0px;
    }

    header .month .rotate{
        transform: rotate(180deg);
    }

    header .profile{
        width: 65px;
        height: 65px;
        margin-right: 25px;  
    }

    header #profilePicture{
        width: 65px;
        height: 65px;
        border-radius: 100px;
        transform-style: preserve-3d;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    header #profilePicture:hover{
        cursor: pointer;
        box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.3);
    }

    header .showProfile{
        position: relative;
        bottom: 85px;
    }
</style>
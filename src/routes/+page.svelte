<script>
	import placeholderImage from "$lib/icons/worldface-british-guy-white-background.jpg";
    import leftArrow from "$lib/icons/left-arrow.png";
    
    import ProfileWindow from "$lib/components/profileWindow.svelte";  
    import MonthDay from "$lib/components/monthDay.svelte";
	import NewTaskButton from "$lib/components/newTaskButton.svelte";
	import TagButton from "$lib/components/tagButton.svelte";

    let showProfile = $state(false);
    function changeProfileVisibility(){
        showProfile = showProfile ? false : true;
    }

    let hide = $state(false);
    function changeLeftMenu(){
        if(hide === true) hide = false;
        else hide = true;
    }

    const month = [];
    let j = 30;
    let h = false;
      
    for(let i = 0; i < 7*5; i++){
        month.push({dayNumber: j, thisMonth: h})
        if(j < 31){
            j++
        }else {
            j = 1;
            h = h ? false : true;
        }   
    }

    /*
    
    */

</script>

<div class="box">
    <header>
        <div class="burger" onclick={changeLeftMenu}>

        </div>

        <div class="name">
            <p>Cal(m)endar</p>
        </div>

        <div class="month">
            <img src={leftArrow} alt="<" class="arrow"><p>Styczeń 2025</p><img src={leftArrow} alt=">" class="arrow rotate">
        </div>
        
        <div class="profile">
            {#if showProfile}
                <ProfileWindow/>
            {/if}    
            <img src={placeholderImage} alt="Profile" id="profilePicture" class:showProfile onclick={changeProfileVisibility}>   
        </div>
    </header>
    <main>
        <div class="leftMenu" class:hide>
            <NewTaskButton {hide}/>
            <TagButton {hide} tagColor = "Blue"/>
        </div>
        <div class="calendar">
            <div class="weekDay calendarBorders">
                <h2>Pon</h2>
            </div>
            <div class="weekDay calendarBorders">
                <h2>Wt</h2>
            </div>
            <div class="weekDay calendarBorders">
                <h2>Śr</h2>
            </div>
            <div class="weekDay calendarBorders">
                <h2>Czw</h2>
            </div>
            <div class="weekDay calendarBorders">
                <h2>Pt</h2>
            </div>
            <div class="weekDay calendarBorders">
                <h2>Sob</h2>
            </div>
            <div class="weekDay calendarBorders rightBorder">
                <h2>Ndz</h2>
            </div>
            {#each month as day, i}
                <MonthDay dayNumber={day.dayNumber} rightBorder={(i+1) % 7 === 0} darkerBg={((i) % 7) % 2 === 0} outOfMonth={!day.thisMonth}/>
            {/each}
        </div>
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
    }

    header .month p{
        margin: 0px 20px;
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

    main .calendar{
        flex: 1 1 auto;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        grid-template-rows: 50px;
        margin: 20px;
        margin-bottom: 30px;
    }

    main .calendar .weekDay{
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 20px;
    }   

    main .calendar .weekDay h2{
        text-align: center;
        margin: 0px auto;
        position: relative;
        bottom: 22px;
        margin-top: 10px;
    }

    
</style>
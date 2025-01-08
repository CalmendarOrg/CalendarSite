<script>
    import settingsIcon from "$lib/icons/settingIcon.png"
    import logoutIcon from "$lib/icons/logoutIcon.png"
</script>

<div class="profileWindow">
    <h2>Mateusz Dziedzic</h2>
    <div class="profileOptions">
        <div class="settings">
            <img src={settingsIcon} alt="Settings Icon" class="img"><p>Ustawienia</p>
        </div>
        <div class="logOut">
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
    }

    .profileOptions .logOut{
        margin-left: 50px;
        display: flex;
        align-items: center;
    }
    
    .profileOptions p{
        margin: 0px;
    }   
</style>
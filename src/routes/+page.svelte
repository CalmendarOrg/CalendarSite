<header>
    <div class="burger">

    </div>

    <div class="name">
        <p>Cal(m)endar</p>
    </div>

    <div class="month">
        <p>&lt Styczeń 2025 &gt</p>
    </div>

    <div class="login">

    </div>
</header>
<main>
    <div class="leftMenu">

    </div>
    <div class="calendar">
    
    </div>
</main>



<style>
    :global(body){
        margin: 0px;
        overflow: hidden;
    }
    
    div, header, main{
        border: 1px solid black;       
    }

    header{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
    }

    header .burger{
        height: 60px;
        width: 60px;
        display: block;
        margin-left: 20px;
        background-color: aquamarine;
        transition: background-color 200ms linear;
    }

    header .burger:hover{
        cursor: pointer;
        background-color: darkcyan;
        transition: background-color 200ms linear;
    }

    header .name{
        margin-left: 20px;
        font-size: 30px;
        font-weight: bold;
    }
    
    header .name p{
        margin: auto;
    }

    header .month{
        margin-right: auto;
        margin-left: auto;
        font-size: 40px;
        font-weight: bold;
    }

    header .month p{
        margin: auto;
    }

    header .login{
        width: 70px;
        height: 70px;
        border-radius: 100px;
        margin-right: 20px;
    }

    main{
        width: 100%;
        
    }

    main .leftMenu{
        display: none;
    }

    main .calendar{
        display: none;
    }
</style>
<script>
    
</script>

<div class="box">
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
</div>



<style>
    :global(html){
        height: 100%;
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
        height: 80px;
        display: flex;
        align-items: center;
        background-color: antiquewhite;
    }

    header .burger{
        height: 50px;
        width: 50px;
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
        font-size: 25px;
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
    }

    header .month p{
        margin: auto;
    }

    header .login{
        width: 60px;
        height: 60px;
        border-radius: 100px;
        margin-right: 25px;
        background-color: blueviolet;
    }

    main{
        width: 100%;
        flex: 1 1 auto;
        background-color: burlywood;
        display: flex;
    }

    main .leftMenu{
        background-color: cornsilk;
        width: 290px;       
    }

    main .calendar{
        display: none;
    }
</style>
<script>
    import googleIcon from "$lib/icons/googleIcon.png";
    import popUpBgImg from "$lib/images/loginBgImg.jpg";
</script>

<div class="popUpBackground">
    <div class="loginPopUp">
        <div class="leftSide">
            
        </div>
        <div class="rightSide">     
            <h2>Cal(m)endar</h2>
            <h3>Twój spokój ducha podczas planowania</h3>
            <form>
                <div class="inputSection">
                    <label for="email"><h4>Email</h4></label>
                    <input type="email" name="email" id="email">
                </div>
                
                <div class="inputSection">
                    <label for="password"><h4>Hasło</h4></label>
                    <input type="password" name="password" id="password">
                </div>
                
                <p id="forgotPassword"><a href="">Zapomniałeś hasła?</a></p>
                
                <button id="logInBt" type="submit">Zaloguj się</button>
                
                <div id="orText">
                    <div class="line"></div><p>Lub</p><div class="line"></div>
                </div>
                
                <button id="googleLoginBt"><img src={googleIcon} alt="">Zaloguj się z Google</button>
                
                <p>Dopiero zaczynasz? <a href="">Stwórz konto</a></p>
            </form>
        </div>
    </div>
</div>   

<style>
    .popUpBackground{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 99;
    }
    
    .loginPopUp{     
        z-index: 100;
        height: 600px;
        width: 700px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-image: url(../../images/loginBgImg.jpg);
        background-position: right;
        transition: all 500ms;
    }

    .loginPopUp .leftSide{
        width: 50%;
        transition: all 700ms;
    }

    .loginPopUp .rightSide{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 500ms;
    }

    @media only screen and (max-width: 750px){
        .loginPopUp{
            width: 350px;
            transition: all 500ms;
        }

        .loginPopUp .leftSide{
            width: 0px;
            transition: all 500ms;
        }

        .loginPopUp .rightSide{
            width: 100%;
            transition: all 500ms;
        }
    }  

    .loginPopUp form{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loginPopUp h2{
        font-size: 38px;
        margin: 0px auto;
    }

    .loginPopUp h3{
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        margin: 20px 80px;
        color: rgb(125, 86, 19);
    }

    .loginPopUp h4{
        font-size: 18px;
        margin: auto;
        margin: 5px auto;
    }

    .loginPopUp .inputSection{
        margin: auto;
        width: 80%;
        margin: 15px auto 0px auto;
        position: relative;
        left: 5px;
    }

    .loginPopUp input{
        width: 90%;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        border-bottom: 1px solid rgb(93, 93, 93);
        font-size: 16px;
        font-weight: 100;
        padding: 1px 5px;
        transition: transform 80ms;
    }

    .loginPopUp input:hover {
        transform: scale(1.03);
        transition: transform 80ms;
    }

    .loginPopUp input:focus{
        transform: scale(1.03);
        outline: none;
        font-weight: 400;
        background-color: rgba(211, 211, 211, 0.3);
    }

    .loginPopUp #forgotPassword{
        margin-top: 10px;
        margin-left: auto;
        margin: 6px 30px 20px auto;
        width: max-content;
        font-size: 14px;
        transition: all 80ms;
        
    }

    .loginPopUp a{
        color: rgb(154, 113, 8);
        transition: all 80ms;
    }

    .loginPopUp #forgotPassword:hover{
        cursor: pointer;
        transform: scale(1.04);
        transition: all 80ms;
        color: goldenrod
    }

    .loginPopUp #logInBt{
        font-size: 18px;
        font-weight: 600;
        color: rgb(245, 250, 255);
        padding: 8px 18px;
        border: none;
        background-color: rgb(87, 73, 40);
        box-shadow: 5px 5px 10px rgb(136, 136, 136);
        margin: 5px;
        transition: all 80ms;
    }

    .loginPopUp #logInBt:hover{
        transition: all 80ms;
        transform: scale(1.04);
        background-color: rgb(117, 95, 44)    
    }

    .loginPopUp #orText{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .loginPopUp #orText p{
        font-weight: 400;
        font-size: 14px;
    }

    .loginPopUp .line{
        height: 1px;
        width: 60px;
        background-color: black;
        margin: 10px;
    }

    .loginPopUp #googleLoginBt{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        padding: 2px 10px;
        transition: all 80ms;
        box-shadow: 2px 2px 5px rgb(136, 136, 136);
        margin-bottom: 10px;
    }

    .loginPopUp #googleLoginBt:hover{
        transition: all 80ms;
        transform: scale(1.04);
    }

    .loginPopUp #googleLoginBt img{
        width: 22px;
        height: 22px;
        margin: 5px 10px 5px 0px;
    }
</style>
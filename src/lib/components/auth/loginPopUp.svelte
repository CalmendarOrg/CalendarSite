<script>
    import popUpBgImg from "$lib/images/loginBgImg.jpg";
	import AuthForm from "$lib/components/auth/authForm.svelte";
    import { registerEmailPassword, signInEmailAndPassword } from "$lib/firebase/auth.client"

    let logInForm = $state(true);
    let emailValue = $state('');
    let emailErrorText = $state('');
    let passwordErrorText = $state('');

    async function register(e){
        try {
            emailErrorText = '';
            passwordErrorText = '';

            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');

            const user = await registerEmailPassword(email, password);
        } catch (error) {            
            if(error.code === 'auth/invalid-email' || error.code === 'auth/missing-email'){
                emailErrorText = "Error! Podano nieprawidłowy email!";
            }else if(error.code === 'auth/missing-password'){
                passwordErrorText = "Error! Nie podano hasła!"
            }else if(error.code === 'auth/password-does-not-meet-requirements'){
                passwordErrorText = "Error! Podane hasło jest niepoprawne!"
            }else if(error.code === 'auth/email-already-in-use'){
                logInForm = true;
                emailErrorText = "Error! Podany email posiada juz konto!";
            }
        }
    }

    async function logIn(e){
        try {
            emailErrorText = '';
            passwordErrorText = '';
            
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');

            const user = await signInEmailAndPassword(email, password);
        } catch (error) {
            if(error.code === 'auth/invalid-email' || error.code === 'auth/missing-email'){
                emailErrorText = "Error! Podano nieprawidłowy email!";
            }else if(error.code === 'auth/missing-password'){
                passwordErrorText = "Error! Nie podano hasła!"
            }else if(error.code === 'auth/invalid-credential'){
                emailErrorText = "Error! Niepoprawny email lub hasło";
                passwordErrorText = "Error! Niepoprawny email lub hasło"
            }
        }
    }
</script>

<div class="popUpBackground">
    <div class="loginPopUp">
        <div class="leftSide">

        </div>
        <div class="rightSide">     
            <h2>Cal(m)endar</h2>
            <h3>Twój spokój ducha podczas planowania</h3>
            {#if logInForm}
                <AuthForm bind:logInForm authFunction={logIn} bind:emailValue {emailErrorText} {passwordErrorText}/>
            {:else}
                <AuthForm bind:logInForm authFunction={register} bind:emailValue {emailErrorText} {passwordErrorText}/>
            {/if}            
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
        position: relative;
        left: 10px;
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
            left: 0px;
        }
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
</style>
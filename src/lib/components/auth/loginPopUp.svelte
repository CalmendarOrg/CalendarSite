<script>
    import popUpBgImg from "$lib/images/loginBgImg.jpg";
    import xIcon from "$lib/icons/close.png";
	import AuthForm from "$lib/components/auth/authForm.svelte";
    import { registerEmailPassword, signInEmailAndPassword } from "$lib/firebase/auth.client";
    import logInStore from "$lib/stores/logIn.store";
	import { goto } from "$app/navigation";
    import { setUser } from "$lib/firebase/database.client";
	import { error } from "@sveltejs/kit";

    let logInForm = $state(true);
    let emailValue = $state('');
    let emailErrorText = $state('');
    let passwordErrorText = $state('');
    let nameErrorText = $state('');

    async function register(e){
        try {
            e.preventDefault();
            emailErrorText = '';
            passwordErrorText = '';
            nameErrorText = ''; 

            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');
            const name = formData.get('name');

            if(name === "" || name === undefined){
                throw new Error('auth/name-missing');
            } else if(name.length <= 3){
                throw new Error('auth/name-too-short');
            }

            const user = await registerEmailPassword(email, password);
            setUser(user, name);
            logInStore.set(false);         
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
            }else if(error == 'Error: auth/name-missing'){
                nameErrorText = "Nie podano imienia!"
            }else if(error == "Error: auth/name-too-short"){
                nameErrorText = "Imie musi posiadać minimum 3 znaki"
            }
        }
    }

    async function logIn(e){
        try {
            e.preventDefault();
            emailErrorText = '';
            passwordErrorText = '';
            
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');

            const user = await signInEmailAndPassword(email, password);
            setUser(user);
            logInStore.set(false);           
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

    function closePopUp(e){
        if (e.target !== this) return;    
        logInStore.set(false);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="popUpBackground" onclick={closePopUp}>
    <div class="loginPopUp">
        <div class="leftSide">

        </div>
        <div class="rightSide">     
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <img src={xIcon} alt="X" id="closeIcon" onclick={closePopUp} class:logInForm>
            <h2>Cal(m)endar</h2>
            <h3>Twój spokój ducha podczas planowania</h3>
            {#if logInForm}
                <AuthForm bind:logInForm authFunction={logIn} bind:emailValue {emailErrorText} {passwordErrorText} />
            {:else}
                <AuthForm bind:logInForm authFunction={register} bind:emailValue {emailErrorText} {passwordErrorText} {nameErrorText}/>
            {/if}            
        </div>
    </div>
</div>   


<style>
    :global(.popUpBackground){
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

    .loginPopUp #closeIcon{
        position: relative;
        left: 165px;
        
        height: 18px;
        width: 18px;
    }

    .loginPopUp #closeIcon:hover{
        cursor: pointer;
    }
    
    .loginPopUp .logInForm{
        top: -22px;
    }
    

</style>
<script>
	import LogInGoogle from "./logInGoogle.svelte";

    let { logInForm = $bindable(), authFunction, emailValue = $bindable(), emailErrorText, passwordErrorText} = $props(); 
    let passwordValue = '';     

    function changeLogInForm(){
        logInForm = !logInForm;  
    }

</script>

<form class="authForm" onsubmit={authFunction}>
    <div class="inputSection">
        <label for="email"><h4>Email</h4></label>
        <input type="email" name="email" id="email" placeholder="YourEmail@sample.com" bind:value={emailValue}>
        {#if emailErrorText !== ''}<h5>{emailErrorText}</h5>{/if}
    </div>
    <div class="inputSection">
        <label for="password"><h4>Hasło {#if !logInForm}<span id="passwordMustHave">(Musi zawierać co najmniej 6 znaków)</span>{/if}</h4></label>
        <input type="password" name="password" id="password" placeholder="*********">
        {#if passwordErrorText !== ''}<h5>{passwordErrorText}</h5>{/if}
    </div>
    
    {#if logInForm}
        <p id="forgotPassword"><span class="actionText">Zapomniałeś hasła?</span></p>
    {/if}
     
    <button id="logInBt" type="submit">{logInForm ? "Zaloguj się" : "Załóż konto"}</button>
    
    <div id="orText">
        <div class="line"></div><p>Lub</p><div class="line"></div>
    </div>

    <LogInGoogle {logInForm}/>
    
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <p>{logInForm ? "Dopiero zaczynasz? " : "Masz już konto ? "}<span onclick={changeLogInForm} class="actionText">{logInForm ? "Stwórz konto!" : "Zaloguj się!"}</span></p>
</form>

<style>
    .authForm{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .authForm h4{
        font-size: 18px;
        margin: auto;
        margin: 5px auto;
    }
    
    .authForm h5{
        margin: 3px 0px 0px 10px;
        color: maroon;
    }

    .authForm #passwordMustHave{
        font-size: 12px;
        font-weight: 400;
        margin: 0px;
    }

    .authForm .inputSection{
        margin: auto;
        width: 80%;
        margin: 15px auto 0px auto;
        position: relative;
        left: 5px;
    }

    .authForm input{
        width: 90%;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        border-bottom: 1px solid rgb(93, 93, 93);
        font-size: 16px;
        font-weight: 100;
        padding: 1px 5px;
        transition: transform 80ms;
    }

    .authForm input:hover {
        transform: scale(1.03);
        transition: transform 80ms;
    }

    .authForm input:focus{
        transform: scale(1.03);
        outline: none;
        font-weight: 400;
        background-color: rgba(211, 211, 211, 0.3);
    }

    .authForm #forgotPassword{
        margin-top: 10px;
        margin-left: auto;
        margin: 6px 30px 0px auto;
        width: max-content;
        font-size: 14px;
        transition: all 80ms;     
        position: relative;
    }

    .authForm .actionText{
        color: rgb(154, 113, 8);
        transition: all 80ms;
        text-decoration: underline;
    }

    .authForm .actionText:hover{
        cursor: pointer;
        transition: all 80ms;
        color: goldenrod
    }

    .authForm #logInBt{
        font-size: 18px;
        font-weight: 600;
        color: rgb(245, 250, 255);
        padding: 8px 18px;
        border: none;
        background-color: rgb(87, 73, 40);
        box-shadow: 5px 5px 10px rgb(136, 136, 136);
        margin: 5px;
        transition: all 80ms;
        margin-top: 30px;
    }

    .authForm #logInBt:hover{
        transition: all 80ms;
        transform: scale(1.04);
        background-color: rgb(117, 95, 44)    
    }

    .authForm #orText{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .authForm #orText p{
        font-weight: 400;
        font-size: 14px;
    }

    .authForm .line{
        height: 1px;
        width: 60px;
        background-color: black;
        margin: 10px;
    }
</style>
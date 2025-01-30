<script>
    import googleIcon from "$lib/icons/googleIcon.png";
    import { loginWithGoogle } from "$lib/firebase/auth.client"
    import logInStore from "$lib/stores/logIn.store";
    import { setUser, getUserInfo } from "$lib/firebase/database.client";

    let { logInForm } = $props();

    async function handleBtnClick(){
        try {
            const user = await loginWithGoogle();
            setUser(user);
            logInStore.set(false);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<button type="button" id="googleLoginBt" onclick={handleBtnClick}><img src={googleIcon} alt="">{logInForm ? "Zaloguj się" : "Załóż konto"} z Google</button>

<style>
    #googleLoginBt{
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

    #googleLoginBt:hover{
        transition: all 80ms;
        transform: scale(1.04);
    }

    #googleLoginBt img{
        width: 22px;
        height: 22px;
        margin: 5px 10px 5px 0px;
    }
</style>
<script>  
	import { enhance } from "$app/forms";
    import { getUserTags } from "$lib/firebase/database.client";
    import authStore from "$lib/stores/auth.store";
    import addTaskStore from "$lib/stores/addTask.store";
	import { onMount } from "svelte";
    
    let tags = $state(new Array());

    onMount(async () => {
        tags = await getUserTags($authStore.userId);
    })

    async function refreshTags(){
        tags = await getUserTags($authStore.userId);
        setTimeout(() => {$addTaskStore = false}, 300);
        setTimeout(() => {$addTaskStore = true}, 301);
    }

    function closePopUp(e){
        if (e.target !== this) return;    
        $addTaskStore = false;
    }

    function handleSubmit(){
        setTimeout(() => {$addTaskStore = false}, 300);
    }

</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="popUpBackground" onclick={closePopUp}>
    <div class="newTaskPopup">
        <h2>Nowe Zadanie</h2>
        <form id="myForm" method="POST" action="?/addTask" use:enhance onsubmit={handleSubmit}>
            <section class="topSide">
                <section class="leftBox">
                    <section class="inputSection nameSection">
                        <label for="taskName" class="nameLabel"><h3>Nazwa*: </h3></label>
                        <input type="text" name="taskName" id="taskName" class="textInput" placeholder="Wyrzucić śmieci">
                    </section>         
        
                    <section class="inputSection">
                        <label for="taskDate"><h3>Data*: </h3></label>
                        <input type="date" name="taskDate" id="taskDate" class="textInput" value={new Date()}>
                    </section>
                </section>
                <section class="rightBox">
                    <section class="selectSection">
                        <label for="tags"><h3>Etykieta*: </h3></label>
                        <select name="tags" id="tags">
                            {#each tags as tag}    
                                <option value={tag.tagId}>{tag.title}</option>                              
                            {/each}
                        </select>
                    </section>

                    <section class="newTagSection">
                        <section class="inputSection">
                            <input type="color" name="tagColor" id="tagColor">
                            <input type="text" name="tagName" id="tagName" class="textInput" placeholder="Obowiązki">
                        </section>
                        <button class="button-30" formaction="?/addTag" onclick={refreshTags}>Dodaj Etykietę</button>
                    </section>
                    
                </section>
            </section>
           
            <section class="descSection">
                <label for="taskDesc"><h3>Opis*</h3></label>   
                <textarea name="taskDesc" id="taskDesc"> </textarea>
            </section>
            <input type="text" id="hideInput" name="userId" value={$authStore.userId}>
            <section class="buttonSection">
                <button id="submit" type="submit" class="buttonsStyle">Dodaj</button> 
                <button id="reset" type="reset" class="buttonsStyle">Reset</button>
            </section>
        </form>
    </div>
</div>

<style>
    .newTaskPopup{
        width: 613px;
        height: 610px;
        background-image: url(../images/newTaskBg.png);;
        display: flex;
        flex-direction: column;
        align-items: center ;
    }

    .leftBox, .rightBox{
        display: flex;
        flex-direction: column;
        height: 200px;
        justify-content: center;
        align-items: center;
        height: min-content;
    }

    .newTaskPopup .leftBox{
        margin-right: 20px;
    }

    .newTaskPopup .rightBox{
        margin-left: 22px;
    }

    .newTaskPopup .selectSection{
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .newTaskPopup h2{
        font-size: 38px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .newTaskPopup h3{
        font-size: 22px;
        font-weight: 600;
        margin: 0px;
    }

    .newTaskPopup .nameLabel{
        position: relative;
        left: -5px;
        margin-bottom: 5px;
    }

    .newTaskPopup select{
        font-size: 18px;
        margin: 10px;
    }

    .newTaskPopup form{
        display: flex;
        flex-direction: column;
        width: max-content;
        padding: 0px 20px 40px 20px;
    }

    .newTaskPopup .topSide{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
    }

    .newTaskPopup .newTagSection{
        display: flex;
        flex-direction: column;
    }

    .newTaskPopup select{
        background-color: rgba(255, 255, 255, 0.3);
        padding: 2px 5px;
    }

    .newTaskPopup .descSection{
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        margin-top: 20px;
    }

    .newTaskPopup .descSection textarea{
        width: 310px;
        height: 160px;
        resize: none;
        font-size: 16px;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 10px;
        padding: 10px 5px;
        border: none;
    }

    .newTaskPopup .descSection textarea:focus{
        transform: scale(1.03);
        outline: none;
    }

    .newTaskPopup .descSection textarea:hover{
        transform: scale(1.03);
        outline: none;
    }

    .newTaskPopup .inputSection{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
        height: min-content;
    }

    .newTaskPopup .nameSection{
        flex-direction: column;
        align-items: start;
    }

    .newTaskPopup .nameSection h3{
        margin: 0px;
    }

    .newTaskPopup .textInput{
        border: none;
        background-color: rgba(255, 255, 255, 0);
        transition: transform 80ms;
        font-size: 18px;
        height: min-content;
        position: relative;
        top: 2px;       
        background-color: rgba(255, 255, 255, 0.3);
        padding: 2px;
    }

    .newTaskPopup input[type=date]{
        width: 120px;
        align-self: center;
        justify-self: center;
        margin-left: 5px;
    }

    .newTaskPopup input[type=color]{
        background-color: rgba(255, 255, 255, 0);
        border: none;
        height: 25px;
        width: 25px;
        margin-right: 10px;
        padding: 0px;
    }

    .newTaskPopup input[type=color]::-webkit-color-swatch{ 
        height: 20px;
        width: 20px;    
        border: none; 
        outline: 2px solid black;
        align-self: center;
    }

    .newTaskPopup .textInput:hover {
        transform: scale(1.03);
        transition: transform 80ms;
    }

    .newTaskPopup .textInput:focus{
        transform: scale(1.03);
        outline: none;
    }

    .newTaskPopup #hideInput{
        display: none;
    }

    .newTaskPopup .buttonSection{
        margin-left: 60px;
    }

    .newTaskPopup .buttonsStyle {
        font-size: 18px;
        align-self: center;
        background-color: #f8e472;
        background-image: none;
        background-position: 0 90%;
        background-repeat: repeat no-repeat;
        background-size: 4px 3px;
        border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
        border-style: solid;
        border-width: 2px;
        box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
        box-sizing: border-box;
        color: #41403e;
        cursor: pointer;
        display: inline-block;
        padding: 10px;
        text-decoration: none;
        transition: all 235ms ease-in-out;
        border-bottom-left-radius: 15px 255px;
        border-bottom-right-radius: 225px 15px;
        border-top-left-radius: 255px 15px;
        border-top-right-radius: 15px 225px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        margin: 10px;
    }

    .newTaskPopup .buttonsStyle:hover {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    .newTaskPopup .buttonsStyle:focus {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }

    .newTaskPopup .button-30 {
        align-items: center;
        appearance: none;
        font-weight: 400;
        background-color: #FCFCFD;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        padding-top: 6px;
        padding-bottom: 8px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 16px;
    }

    .newTaskPopup .button-30:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .newTaskPopup .button-30:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .newTaskPopup .button-30:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
</style>
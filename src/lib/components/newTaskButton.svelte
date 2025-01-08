<script>
    import plusIcon from "$lib/icons/plus.png"

    let { hide } = $props();
</script>

<div class="createNewTask" class:hideButton = {hide}>
    <img src={plusIcon} alt="+"><h2>Dodaj zadanie</h2>
</div>

<style>    
    .createNewTask{
        position: relative;
        display: flex;
        align-items: center;
        justify-self: center;
        justify-content: center;
        width: max-content;
        padding: 10px 15px;
        border: 2px solid black;
        margin-top: 50px;
        right: 0px;
        transition: right 200ms ease-in-out;
        background-color: whitesmoke;
    }

    .createNewTask:hover{
        cursor: pointer;
    }

    .createNewTask img{
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }

    .createNewTask h2{
        margin: 0px;
        font-size: 20px;
    }

    .hideButton{
        right: 290px;
        transition: right 200ms ease-in-out;
    }

</style>
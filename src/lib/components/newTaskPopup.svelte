<script>
    let etykiety = ["Moje Zadania", "Obowiązki", "Szkoła"]
</script>

<div class="popUpBackground">
    <div class="newTaskPopup">
        <h1>Dodawanie Zadań</h1>
        <form>
            <section class="thinSection">
                <section class="inputSection">
                    <label for="taskName"><h4> Nazwa </h4></label>
                    <input type="text" name="taskName" id="taskName" placeholder="">
                </section>
                <section class="inputSection">
                    <label for="taskDate"><h4> Data </h4></label>
                    <input type="date" name="taskDate" id="taskDate" placeholder="">
                </section>
            </section>
            <section class="selectSection">

                <select>
                    {#each etykiety as etykieta }
                        <option> {etykieta} </option>
                    {/each}
                </select>
                <button type="button"> Dodaj Etykietę </button>
            </section>
            <section class="inputSection">
            <label for="taskDesc"><h4> Opis </h4></label>   
            <textarea name="taskDesc" id="taskDesc" placeholder=""> </textarea>
        </section>
            <section class="buttonSection">
                <button id="submit" type="submit">Akceptuj</button> 
                <button id="reset" type="reset">Reset</button>
            </section>

        </form>
    </div>
</div>

<style>
    .buttonSection{
        width: 150px;
        height: 60px;
        font-size: 30px;
    }
    .buttonSection{
        text-align: center;
    }
    h1{
        text-align: center;
    }
    .inputSection{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }
    .thinSection{
        display: flex;
        flex-direction: row;
        text-align: center;
    }
    .newTaskPopup{
        width: 600px;
        height: 550px;
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        align-items: center ;
    }

    input{
        width: 246px;
        height: 20px;
        font-size: 18px;
    }
    textarea{
        resize: none;
        width: 500px;
        height: 200px;
        font-size: 20px;
    }
</style>
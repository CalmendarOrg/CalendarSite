<script>
    let { hide, tagName, tagColor, count} = $props();
    let bgColor = $state("whitesmoke");
    let bordeColor = $state("lightgrey");

    switch(tagColor.toLowerCase()){
        case "blue":
            bgColor = "#DDE7FF";
            bordeColor = "#335F9C";
            break;        
    }

    let chBoxChecked = false;
    let chBoxBgColor = $state("white");
    let chBoxBorderColor = $state("black");
    function handleChkBoxClick(){
        if(!chBoxChecked){
            chBoxBgColor = bordeColor;
            chBoxBorderColor = bordeColor;
        }else{
            chBoxBgColor = "white";
            chBoxBorderColor = "black";
        }
        chBoxChecked = chBoxChecked ? false : true;
    }
</script>

<label for={tagName || "" + count + "ChkBox"}>
    <div class="tagButton" class:hideButton = {hide} style:background-color = {bgColor} style:border-color = {bordeColor}>
        <input type="checkbox" id={tagName || "" + count + "ChkBox"} onclick={handleChkBoxClick} 
           style:background-color = {chBoxBgColor} style:border-color = {chBoxBorderColor}>
        <h2>{tagName || "Placeholder"}</h2>
    </div>
</label>

<style>
    .tagButton{        
        position: relative;
        display: flex;
        align-items: center;
        justify-self: center;
        justify-content: center;
        width: 220px;
        padding: 5px 10px;
        border: 2px solid;
        margin-top: 50px;
        right: 0px;
        transition: right 200ms ease-in-out;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }

    .tagButton:hover{
        cursor: pointer;
    }

    .tagButton input{
        appearance: none;
        width: 22px;
        height: 22px;
        border: 2px solid;
        cursor: pointer;
        margin-right: auto;
    }

     /* Tło zaznaczenia */
    input[type="checkbox"]:checked {
      background-color: #4caf50;
      border-color: #4caf50;
    }

    /* CSS-owa "okejka" */
    input[type="checkbox"]:checked::after {
      content: '';
      position: absolute;
      top: 11px;
      left: 21px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
    }

    .tagButton h2{
        margin: 0px;
        font-size: 18px;
        margin-left: auto;
        margin-right: auto;
    }

    .hideButton{
        right: 290px;
        transition: right 200ms ease-in-out;
    }
</style>
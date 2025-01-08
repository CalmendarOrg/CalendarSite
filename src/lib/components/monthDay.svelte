<script>
	import { onMount } from "svelte";

    let props = $props();
    const rightBorder = props.rightBorder;
    const darkerBg = props.darkerBg
</script>

<div class="calendarBorders" class:rightBorder class:darkerBg>
    <h2>{props.dayNumber}</h2>
</div>

<style>
    div{
        text-align: center;
        position: relative;
    }

    .darkerBg{
        background-color: lightgray;
    }

    :global(.calendarBorders){
        border-left: 2px solid black;
        transform-style: preserve-3d;
    }

    :global(.rightBorder){
        border-right: 2px solid black;
    }

    :global(.calendarBorders::after){
        content: "";
        position: absolute;
        height: 2px;
        background: black;
        top: 100%;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
<script>
    import MonthDay from "$lib/components/calendar/monthDay.svelte";
	import authStore from "$lib/stores/auth.store";

    let { month } = $props();
    const today = new Date();

</script>

<div class="calendar">
    <div class="weekDay calendarBorders">
        <h2>Pon</h2>
    </div>
    <div class="weekDay calendarBorders">
        <h2>Wt</h2>
    </div>
    <div class="weekDay calendarBorders">
        <h2>Śr</h2>
    </div>
    <div class="weekDay calendarBorders">
        <h2>Czw</h2>
    </div>
    <div class="weekDay calendarBorders">
        <h2>Pt</h2>
    </div>
    <div class="weekDay calendarBorders">
        <h2>Sob</h2>
    </div>
    <div class="weekDay calendarBorders rightBorder">
        <h2>Ndz</h2>
    </div>
    {#each month as day, i}
        <MonthDay dayNumber={day.day} date={day.date} rightBorder={(i+1) % 7 === 0} darkerBg={((i) % 7) % 2 === 0} outOfMonth={day.otherMonth} dayTasks={day.tasksIds}/>
    {/each}
</div>

<style>
    .calendar{
        flex: 1 1 auto;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        grid-template-rows: 50px;   
        margin: 30px 50px 50px 0px;
    }

    .calendar .weekDay{
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 20px;
    }   

    .calendar .weekDay h2{
        text-align: center;
        margin: 0px auto;
        position: relative;
        bottom: 22px;
        margin-top: 10px;
    }
</style>
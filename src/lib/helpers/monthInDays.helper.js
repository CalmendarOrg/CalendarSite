export function getMonthDays(thisMonth){
    const days = [];
    
    let date = new Date(thisMonth);
    let endOfMonth = false;
    
    while(true){
        days.unshift({day: date.getDate(), otherMonth: endOfMonth});      
        
        if(date.getDate() === 1) endOfMonth = true;       
        if(endOfMonth && date.getDay() === 1) break;
        
        date.setDate(date.getDate() - 1);
    }

    endOfMonth = false;
    date = new Date(thisMonth);
    
    while(true){        
        date.setDate(date.getDate() + 1);
        
        if(date.getMonth() !== thisMonth.getMonth()) endOfMonth = true;       
        if(endOfMonth && date.getDay() === 1) break;       
        
        days.push({day: date.getDate(), otherMonth: endOfMonth});
    }
    return days;
}
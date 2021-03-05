function clock(){

    /*let date = new Date();

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getUTCFullYear();

    let temp = day + month + year;*/

    

    let hms = new Date();

    let hours = hms.getHours();
    let minutes = hms.getMinutes();
    let seconds = hms.getSeconds();
    
    let hourDay = "AM";

    if(hours == 24){
        hours = 00;
    }

    if(hours > 24){
        hours = hours - 12;
    }

    if(hours > 12){
        hourDay = "PM"
    }
   

    let time = hours + ":" + minutes + ":" + seconds + " " + hourDay;

    

    document.getElementById("clock").innerHTML = time;

    setTimeout(clock, 1000);


}

clock();
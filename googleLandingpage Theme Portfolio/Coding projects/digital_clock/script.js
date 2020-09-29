function timer(){
    const date = new Date();
    var hour = date.getHours();
    var min  = date.getMinutes();
    var sec = date.getSeconds();

    if(hour < 10){
        hour  = '0' + hour;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
         sec = '0' + sec;    
    }
    
    document.getElementById('h').innerHTML = hour; 
    document.getElementById('h').textContent = hour;

    document.getElementById('m').innerHTML = ':' +min;
    document.getElementById('m').textContent = ':' +min;

    document.getElementById('s').innerHTML = ':' +sec;
    document.getElementById('s').textContent = ':' +sec;

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    /*
    console.log(month);
    console.log(currentDate);
    console.log(year);*/
    if(day < 10){
        day = '0' + day
    }
    if(month < 10){
       month = '0' + month;
    }
    if(year < 10){
        year = '0' + year;
    }

    document.getElementById('dy').innerHTML = day + '/';
    document.getElementById('mh').innerHTML = month + '/';
    document.getElementById('yr').innerHTML = year;
}
setInterval(timer,1000);

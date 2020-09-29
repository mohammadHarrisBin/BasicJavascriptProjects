function DegreeOrFahrenheit(){
    var userValue = document.getElementById('value');
    var dbtn = document.getElementById('btn1');
    var fbtn = document.getElementById('btn2');
    var textAns = document.getElementById('answer');
 
    dbtn.addEventListener('click',funtion1 = () =>{
        newuserValue = (userValue.value - 32) * (5/9);
        textAns.innerHTML = parseFloat(newuserValue) + ' / '.concat(parseInt(newuserValue) + ' Degrees Celcius'); 
    })

    fbtn.addEventListener('click',funtion2 = () =>{
        newuserValue = (userValue.value * (5/9)) + 32;
        textAns.innerHTML = newuserValue + ' / '.concat(parseInt(newuserValue) + ' Fahrenheit'); 
    })
}

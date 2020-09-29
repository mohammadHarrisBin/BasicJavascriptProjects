var body = document.getElementById('body');
var value = document.getElementById('colorValue');
var hexDigits = [
    1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'
]
var hex = '#';
var btn = document.getElementById('btn1').addEventListener('click',HexaChange=()=>{
      var i = 0;
      hex = '#';
      while(i < 6){
          var random = Math.floor(Math.random() * hexDigits.length);
          hex += hexDigits[random]; 
          //hex += hexDigits[Math.floor(Math.random() * hexDigits.length)];
          i++;
          console.log(hex);
      }
      body.style.backgroundColor = hex;
      value.innerHTML = hex;
      
});

/*
var hexaDigits = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
var hex = '#';

var btn = document.getElementById('btn1').addEventListener('click',funtion1 = () =>{
    hex = '#';
    for(i = 0; i < 6; i++){
        hex += hexaDigits[Math.floor(Math.random() * hexaDigits.length)];
    }
    console.log(hex);
})
*/
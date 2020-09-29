var fonts = [
    'Fantasy','Cursive','Serif'
]
var btn = document.getElementById('font');
btn.addEventListener('click',function(e){
    e.preventDefault;
    document.body.style.backgroundColor = Math.floor(Math.random()*fonts.length);

})

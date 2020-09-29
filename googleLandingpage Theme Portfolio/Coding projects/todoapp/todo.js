//var submit_
var submit_btn = document.getElementById('submit-btn');
var user_input = document.getElementById('user-input');
document.body.style.backgroundColor = 'grey';


submit_btn.addEventListener('click',function(){
     if(user_input.value == 0){
       console.log('its empty');
       alert('its empty');
     }
     else{
        var new_paragraph = document.createElement('p');
        var new_text = document.createTextNode(user_input.value);
        new_paragraph.appendChild(new_text);
        var new_div = document.createElement('div');
        new_div.classList.add('item');
        new_div.appendChild(new_paragraph);
        var main_div = document.getElementById('items');
        main_div.appendChild(new_div);

        var editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.innerHTML = "Finished";
        editBtn.addEventListener('click',function(){
            new_div.style.backgroundColor= '#E84855';
            new_paragraph.style.color = 'black';
            new_paragraph.innerHTML = '<strike>'+new_paragraph.innerHTML+'</strike>';
        })
        var delete_btn = document.createElement('button');
        delete_btn.classList.add('btn');
        delete_btn.innerHTML = 'delete';
        delete_btn.addEventListener('click',function(){
            new_div.remove();
        });
        new_div.appendChild(delete_btn);
        new_div.appendChild(editBtn);
        
       // buttondiv.appendChild(delete_btn);
       // buttondiv.appendChild(editBtn);
       // new_div.appendChild(buttondiv);
        
        var clear_btn = document.getElementById('clearItems').addEventListener('click',function(){
            if(new_div.classList == 'item'){
                new_div.remove();
            }
        })
        clear_btn.classList.add('btn');
     }
     
     
})



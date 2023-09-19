const inputBox = document.querySelector('#input_box');
const listContainer = document.querySelector('.list-container');
const button = document.querySelector('#btn');

button.addEventListener('click',function(){
      if(inputBox.value === ''){
          alert('You must write something📝!')
      }
      else{
          let li = document.createElement('li');
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement('span');
          span.innerHTML =  '\u00d7';
          li.appendChild(span);
      }
      saveTask()
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask()
    }
    else if(e.target.tagName === 'SPAN'){
         e.target.parentElement.remove();
         saveTask()
    }
},false);


function saveTask(){
     localStorage.getItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();




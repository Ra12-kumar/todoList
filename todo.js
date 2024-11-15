const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const todo = document.querySelector("#todo");

btn.addEventListener("click", function () {
   const task = input.value.trim();
   if (task === '') {
       alert("please enter task");
       return;
   }

   
   const listItem = document.createElement('li');
   listItem.textContent = task;
   listItem.className = 'todo-item'; 

   
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.classList.add('delete-btn'); 
   
   
   deleteButton.addEventListener('click', function () {
       todo.removeChild(listItem); 
   });


   listItem.appendChild(deleteButton);

   todo.appendChild(listItem);

   
   input.value = '';
});

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [];


const rendre = function(){
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    //copyAndPush();
    toDoData.forEach(function(item, index){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text +'</span>' + 
            '<div class="todo-buttons">'+
		    '<button class="todo-remove">' + '</button>' + 
		    '<button class="todo-complete"' + '</button>' + 
		    '</div>';

        if(item.completed === true){
            todoCompleted.append(li);
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
        }
        else {
            todoList.append(li);
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
        }

        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed;
            rendre();
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
        })
        li.querySelector('.todo-remove').addEventListener('click', function(){
            toDoData.splice(index, 1);

            rendre();
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
        })
    })
}

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    const newToDo = {
        text: headerInput.value,
        completed: false,
    }
    if(newToDo.text.trim() !== ''){
        toDoData.push(newToDo);
    }
    headerInput.value = '';
    rendre();
});

copyToDoData = JSON.parse(localStorage.getItem('toDoData'));
for(let i = 0; i < copyToDoData.length; i++){
    toDoData.push(copyToDoData[i]);
}
rendre();


//localStorage.clear();
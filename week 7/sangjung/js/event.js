export function initEvent(Todo, addTodo, renderTodo){ // 버튼들한테 이벤트 할당
    const todoInput = document.querySelector('.todo-input');
    const enter = document.querySelector('.enter');
    const all = document.getElementById('all');
    const active = document.getElementById('active');
    const completed = document.getElementById('completed');
    const clear = document.getElementById('clear');
    
    todoInput.addEventListener('keyup', function(e){
        if(e.key === "Enter"){
            addTodo(Todo,todoInput);
        }
    });
    enter.addEventListener('click', function(){
        addTodo(Todo,todoInput);
    });
    clear.addEventListener('click', function(){
        completed.className = "show-completed-btn";
        active.className = "show-active-btn";
        all.className = "show-all-btn selected";
        Todo.clear();
        Todo.mode.set(Todo.mode.ALL_MODE);
        renderTodo(Todo);
    });
    
    all.addEventListener('click', function(){
        completed.className = "show-completed-btn";
        active.className = 'show-active-btn';
        all.className = "show-all-btn selected";
        Todo.mode.set(Todo.mode.ALL_MODE);
        renderTodo(Todo);
    });

    active.addEventListener('click', function(){
        completed.className = "show-completed-btn";
        active.className = "show-active-btn selected";
        all.className = "show-all-btn";
        Todo.mode.set(Todo.mode.ACTIVE_MODE);
        renderTodo(Todo);
    });
    
    completed.addEventListener('click', function(){
        completed.className = "show-completed-btn selected";
        active.className = "show-active-btn";
        all.className = "show-all-btn";
        Todo.mode.set(Todo.mode.COMPLETED_MODE);
        renderTodo(Todo);
    });
}



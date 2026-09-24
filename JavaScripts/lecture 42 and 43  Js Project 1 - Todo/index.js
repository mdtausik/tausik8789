const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-btn")

//'Go to gym', "Revision Web dev", "Take class"

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let editTodoId = null  // flag
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoValue = todoInput.value.trim();

    // aagr todo is value empty hai means "" then we do !"" -> true and ! is logical not operator
    if (!todoValue) {
        return
    }

    console.log({ editTodoId, todoValue });

    if (editTodoId) {
        // editing 
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })

        localStorage.setItem("todos" , JSON.stringify(todos))


    } else {
        //adding
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }

        todos.push(newTodo) // adding new todo to exisiting todos list
        localStorage.setItem("todos" , JSON.stringify(todos))

        // todos.push({
        //     id: Date.now(),
        //     text: todoValue,
        //     isCompleted: false
        // })
    }

    cancelEdit();
    renderTodo() // jab koi naya todo add hoga firse updated todos render ho jayenge
})



function renderTodo() {
    todoList.innerHTML = ""
    //  or 
    // todoList.textContent = ""
    todos.forEach((todo) => {
        const li = document.createElement("li");

        // li.setAttribute("class" , "flex gap-2 border border-slate-300 p-4 rounded-xl")
        // or
        li.className = "flex gap-2 border border-slate-300 p-4 rounded-xl"

        // li.setAttribute("data-id", todo.id) // this is jugad
        // or
        li.dataset.id = todo.id // this is original method

        li.innerHTML = `
                    <input data-action="toogle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
                    <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer" >Edit</button>
                        <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer" >Delete</button>
                    </div>`


        todoList.append(li) // here we want exact/valid html code
    })

    taskCount.textContent = `TASKS (${todos.length})`
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo() // jab first time file execute hogi tab existing todos render ho jayenge


// event delegation
todoList.addEventListener('click', (e) => {
    e.stopPropagation()

    // console.log(e.target); // e.target -> jis element per click krte ho
    // console.log(e.currentTarget); // e.currentTarget -> jis element per event listener attached hai

    // console.log(e.target.parentElement);

    const li = e.target.closest('li')
    const id = li.dataset.id;


    let action = e.target.dataset.action

    if (action === "delete") {
        deleteTodo(id)
    }

    if (action === "edit") {
        startEdit(id)
    }

    if (action === "toogle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        localStorage.setItem("todos" , JSON.stringify(todos))
        renderTodo()
    }
})

function deleteTodo(id) {
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    localStorage.setItem("todos" , JSON.stringify(todos))
    renderTodo()
}

function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text
    formBtn.textContent = "Update"
    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}

function cancelEdit() {
    editTodoId = null;

    todoInput.value = "";

    formBtn.textContent = "Add";

    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");
}


cancelBtn.addEventListener("click", () => {
    cancelEdit();
});
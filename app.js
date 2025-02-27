// 2. Implement the TodoList class
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate
        };
        this.todos.push(newTodo);
    };
    // Mark a todo item as completed
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.findTodoById(id);
        if (todo) {
            todo.completed = true;
        }
        else {
            throw new Error("Todo with id ".concat(id, " not found"));
        }
    };
    // Remove a todo item
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        else {
            throw new Error("Todo with id ".concat(id, " not found"));
        }
    };
    // List all todo items
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    // 4. Filter todos by completed status
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    // 5. Update task description
    TodoList.prototype.updateTodoTask = function (id, newTask) {
        var todo = this.findTodoById(id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            throw new Error("Todo with id ".concat(id, " not found"));
        }
    };
    // 6. Clear all completed todos
    TodoList.prototype.clearCompletedTodos = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    // Helper method to find a todo by id
    TodoList.prototype.findTodoById = function (id) {
        return this.todos.find(function (todo) { return todo.id === id; });
    };
    return TodoList;
}());
// Example usage
var todoList = new TodoList();
todoList.addTodo("Learn TypeScript", new Date(2023, 5, 1));
todoList.addTodo("Build a Todo App", new Date(2023, 5, 15));
console.log("All todos:", todoList.listTodos());
todoList.completeTodo(1);
console.log("After completing todo 1:", todoList.listTodos());
todoList.updateTodoTask(2, "Build an Advanced Todo App");
console.log("After updating todo 2:", todoList.listTodos());
console.log("Incomplete todos:", todoList.filterTodos(false));
todoList.clearCompletedTodos();
console.log("After clearing completed todos:", todoList.listTodos());
todoList.removeTodo(2);
console.log("After removing todo 2:", todoList.listTodos());

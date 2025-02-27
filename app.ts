// Create the TodoItem interface
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date; // Added as per requirement 7
  }
  
  // Implement the TodoList class
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    // Add a new todo item
    addTodo(task: string, dueDate: Date): void {
      const newTodo: TodoItem = {
        id: this.nextId++,
        task,
        completed: false,
        dueDate
      };
      this.todos.push(newTodo);
    }
  
    // Mark a todo item as completed
    completeTodo(id: number): void {
      const todo = this.findTodoById(id);
      if (todo) {
        todo.completed = true;
      } else {
        throw new Error(`Todo with id ${id} not found`);
      }
    }
  
    // Remove a todo item
    removeTodo(id: number): void {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      } else {
        throw new Error(`Todo with id ${id} not found`);
      }
    }
  
    // List all todo items
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    // Filter todos by completed status
    filterTodos(completed: boolean): TodoItem[] {
      return this.todos.filter(todo => todo.completed === completed);
    }
  
    // Update task description
    updateTodoTask(id: number, newTask: string): void {
      const todo = this.findTodoById(id);
      if (todo) {
        todo.task = newTask;
      } else {
        throw new Error(`Todo with id ${id} not found`);
      }
    }
  
    // Clear all completed todos
    clearCompletedTodos(): void {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  
    // method to find a todo by id
    private findTodoById(id: number): TodoItem | undefined {
      return this.todos.find(todo => todo.id === id);
    }
  }
  
  
  const todoList = new TodoList();
  
  todoList.addTodo("Learn TypeScript", new Date(27, 2, 2025));
  todoList.addTodo("Build a Todo App", new Date(28-2-2025));
  
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
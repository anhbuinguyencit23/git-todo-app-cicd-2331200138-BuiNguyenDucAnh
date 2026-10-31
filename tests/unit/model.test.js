const { TodoService } = require('../../js/model.js');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        service = TodoService.getInstance();
        service.todos = [];
    });

    test('addTodo should add a new todo item to the list', () => {
        const initialLength = service.todos.length;
        const text = 'Learn Unit Testing';

        service.addTodo(text);

        expect(service.todos.length).toBe(initialLength + 1);
        expect(service.todos[0].text).toBe(text);
        expect(service.todos[0].completed).toBe(false);
    });

    test('toggleTodoComplete should toggle the completed status', () => {
        service.addTodo('Learn Integration Testing');
        const id = service.todos[0].id;
        
        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(true);

        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(false);
    });

    test('removeTodo should remove a todo item by id', () => {
        service.addTodo('Task 1');
        service.addTodo('Task 2');
        const idToRemove = service.todos[0].id;

        service.removeTodo(idToRemove);

        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe('Task 2');
    });

    test('removeTodo should not change the array if id does not exist', () => {
        service.addTodo('Task 1');
        const initialLength = service.todos.length;

        service.removeTodo(9999);

        expect(service.todos.length).toBe(initialLength);
    });
});
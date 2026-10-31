const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();

        // Reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        service.addTodo('Learn JavaScript');

        expect(service.todos).toHaveLength(1);
        expect(service.todos[0].text).toBe('Learn JavaScript');
    });

    test('should toggle the completed state of a todo', () => {
        service.addTodo('Learn Jest');

        const todoId = service.todos[0].id;

        service.toggleTodoComplete(todoId);
        expect(service.todos[0].completed).toBe(true);

        service.toggleTodoComplete(todoId);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        service.addTodo('Complete Lab 3');

        const todoId = service.todos[0].id;

        service.removeTodo(todoId);

        expect(service.todos).toHaveLength(0);
    });

    test('should not add a todo if text is empty', () => {
        service.addTodo('');

        expect(service.todos).toHaveLength(0);
    });
});
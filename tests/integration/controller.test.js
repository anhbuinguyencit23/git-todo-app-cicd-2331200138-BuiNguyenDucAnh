const { TodoService } = require('../../js/model.js');
const { Controller } = require('../../js/controller.js');

const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService(); 
        service.todos = [];
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        const text = 'Integration Test Task';
        
        controller.handleAddTodo(text);
        
        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe(text);
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        service.addTodo('Task to remove');
        const id = service.todos[0].id;
        
        controller.handleRemoveTodo(id);
        
        expect(service.todos.length).toBe(0);
    });
});
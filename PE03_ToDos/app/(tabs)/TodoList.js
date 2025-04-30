import React from 'react';
import{View} from 'react-native';
import Todo from './Todo'; // Import Todo component

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case "All":
        return todos // If type is all, return all todos
      case "Complete":
        return todos.filter((t) => t.completed) // If type is complete, return completed todos
      case "Active":
        return todos.filter((t) => !t.completed) // If type is active, return active todos
    }
  };
  todos = getVisibleTodos(todos, type); // Filter todos by type
  // Map over todo component. Return Todo component for each item
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo = {deleteTodo} // Pass deleteTodo to delete
        toggleComplete = {toggleComplete} // Pass toggleComplete to change status
        key = {todo.todoIndex} // React reconciliation
        todo = {todo} // Pass current todo as prop
      />
    );
  });
  // Render all todo components
  return (
    <View>
      {todos}
    </View>
  );
};

// Export TodoList as default
export default TodoList;
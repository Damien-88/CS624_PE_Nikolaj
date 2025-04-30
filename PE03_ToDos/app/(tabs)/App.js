// Import modules from React & React Native
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading'; // Import Heading component
import Input from './Input'; // Import Input component
import Button from './Button'; // Import Button component
import TodoList from './TodoList'; // Import TodoList component
import TabBar from './TabBar'; // Import TabBar component

let todoIndex = 0 // Initialize todo index

// Define main App component (class-based component)
class App extends Component {
    // Constructor method to initialize state
    constructor() {
        super(); // Call parent class's constructor
        this.state = {
            inputValue: "", // Hold current value of input
            todos: [], // Array to store list of todo items
            type: "All", // Filter type for displaying todos
        };
        this.submitTodo = this.submitTodo.bind(this); // Bind submitTodo method to current context
        this.toggleComplete = this.toggleComplete.bind(this); // Bind toggleComplete method to current context
        this.deleteTodo = this.deleteTodo.bind(this); // Bind deleteTodo method to current context
        this.setType = this.setType.bind(this); // Bind setType to current context
    }

    deleteTodo(todoIndex) {
        let todos = this.state.todos; // Get current todos from state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex); // Filter out deleted todo item
        this.setState({ todos }); // Update state w/ new todos array
    }

    toggleComplete(todoIndex) {
        let todos = this.state.todos; // Get current todos from state
        todos.forEach((todo) => { // Iterate through todos
            if (todo.todoIndex === todoIndex) { // Check if todo item matches index
                todo.completed = !todo.completed; // Toggle completed status
            }
        })
        this.setState({ todos }); // Update state w/ new todos array
    }

    setType(type) {
        this.setState({ type }); // Update state w/ new type
    }

    // Component lifecycle method to set up any required functionality
    inputChange(inputValue) {
        console.log(" Input Value: ", inputValue); // Log input value to console
        this.setState({inputValue}); // Update state w/ new input value
    }

    // Component lifecycle method to set up any required functionality
    submitTodo(){
        if (this.state.inputValue.match(/^\s*$/)) { // Check if input is empty or whitespace
            return; // Exit if true
        }
        const todo = {
            title: this.state.inputValue, // Set title from input value
            todoIndex, // Index of todo item
            completed: false, // Set completed status to false
        }
        todoIndex++ // Increment todo index for next item
        const todos = [...this.state.todos, todo] // Create new todos array w/ new todo item
        this.setState({todos, inputValue: ""}, () => { // Update state w/ new todos and reset input value
            console.log("State: ", this.state); // Log updated state to console
        })
    }

    // Render method to define UI
    render() {
        const {inputValue, todos, type} = this.state; // Destructure inputValue from state
        return (
            // Main container view w/ styles
            <View style = {styles.container}>
                {/* Scrollable view/ Allows tapping elements w/out dismissing keyboard */}
                <ScrollView 
                    keyboardShouldPersistTaps = "always" 
                    style = {styles.content}>
                    {/* Placeholder View component */}
                    <Heading />
                    {/* Input component for user input */}
                    <Input
                        inputValue = {inputValue} // Pass input value to Input component
                        inputChange = {text => this.inputChange(text)} // Pass inputChange method to Input component 
                    />
                    <TodoList
                        todos = {todos} // Pass todos array to TodoList component
                        toggleComplete = {this.toggleComplete} // Pass toggleComplete as prop to mark status
                        deleteTodo = {this.deleteTodo} // Pass deleTodo method as prop to delete todo
                        type = {type} // Pass type to type component
                    />
                    <Button 
                        submitTodo = {this.submitTodo} // Pass submitTodo method to Button component
                    /> 
                </ScrollView>
                <TabBar 
                    type = {type} 
                    setType = {this.setType} 
                />
            </View>
        );
    }
}

// Define component styles
const styles = StyleSheet.create({
    // Main container style
    container: {
        flex: 1, // Full height of screen
        backgroundColor: "#f5f5f5", // Light gray bg
    },
    // Scrollable content style
    content: {
        flex: 1, // Remaining space in container
        paddingTop: 60, // Pad top
    },
});

// Export App component as default
export default App;
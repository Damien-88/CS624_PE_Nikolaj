import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

// Define functional component, takes prop `todo`
const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    // Create container for todo item w/ styles
  <View style = {styles.todoContainer}> 
    {/* Display todo title inside container */}
    <Text style = {styles.todoText}>
      {todo.title} {/* Show title of todo item */}
    </Text>
    {/* Container for buttons */}
    <View style = {styles.buttons}>
      <TodoButton
        name = "Done"
        complete = {todo.completed} // Indicate status for styling
        onPress = {() => toggleComplete(todo.todoIndex)} // Toggle status on press
      />
      <TodoButton
        name = "Delete"
        onPress = {() => deleteTodo(todo.todoIndex)} // Delete todo on press
      />
    </View>
  </View>
)

// Define styles for todo component
const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20, // Set left margin
    marginRight: 20, // Set right margin
    backgroundColor: '#ffffff', // Set background color
    borderTopWidth: 1, // Set top border width
    borderRightWidth: 1, // Set right border width
    borderLeftWidth: 1, // Set left border width
    borderColor: '#ededed', // Set border color
    paddingLeft: 14, // Set left padding
    paddingTop: 7, // Set top padding
    paddingBottom: 7, // Set bottom padding
    shadowOpacity: 0.2, // Set shadow opacity
    shadowRadius: 3, // Set shadow radius
    shadowColor: '#000000', // Set shadow color
    shadowOffset: { width: 2, height: 2 }, // Set shadow offset
    flexDirection: 'row', // Set flex direction to row
    alignItems: 'center' // Align items to center
  },
  // Define styles for buttons
  buttons: {
    flex: 1, // Fill space
    flexDirection: "row", // Arrange in row
    justifyContent: "flex-end", // Align right end
    alignItems: "center" // Center vertically
  },
  todoText: {
    fontSize: 17 // Set font size
  }
})

export default Todo; // Export todo component
import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

// Define functional component, takes prop `todo`
const Todo = ({todo}) => (
    // Create container for todo item w/ styles
  <View style = {styles.todoContainer}> 
    {/* Display todo title inside container */}
    <Text style = {styles.todoText}>
      {todo.title}
    </Text>
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
  todoText: {
    fontSize: 17 // Set font size
  }
})

export default Todo; // Export todo component
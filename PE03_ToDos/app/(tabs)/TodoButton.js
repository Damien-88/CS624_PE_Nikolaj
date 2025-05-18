import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const TodoButton = ({ onPress, complete, name }) => (
    <TouchableHighlight
        onPress = {onPress} // Function to call when button is pressed
        underlayColor = "#efefef" // Set color when button is pressed
        style = {styles.button}
        >
        <Text style = {[
            styles.text, // Apply text styles
            complete ? styles.complete : null, // Apply complete style if todo is completed
            name === "Delete" ? styles.deleteButton : null // Apply delete style if button name is "Delete"
            ]}
        >
            {name}
        </Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-end", // Align button to end of container
        padding: 7, // Pad inside button
        borderColor: "#ededed", // Set button border color
        borderWidth: 1, // Set button border width
        borderRadius: 4, // Round button corners
        marginRight: 5 // Add space to right of button
    },
    text: {
        color: "#666666" // Set text default color
    },
    complete: {
        color: "green", // Change text color for completed todos
        fontWeight: "bold" // Change text wieght for completed todos
    },
    deleteButton: {
        color: "rgba(175, 47, 47, 1)" // Change delete button text color
    }
})

// Export Todo Button component as default
export default TodoButton;
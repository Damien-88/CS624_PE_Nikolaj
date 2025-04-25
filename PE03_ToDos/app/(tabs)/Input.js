// Import React & components from React Native
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// Define functional component Input 
const Input = ({inputValue, inputChange}) => (
    // Input Container w/ styles
    <View style = {styles.inputContainer}>
        {/* TextInput component w/ placeholder and styles */}
        <TextInput
            value = {inputValue} // Current value of input field
            style = {styles.input} // Styles for TextInput
            placeholder = "What needs to be done?" // Placeholder text input field
            placeholderTextColor = "#CACACA" // Placeholder text color
            selectionColor = "#666666" // Text selection highlight color
            onChangeText = {inputChange} // Function to call when text changes
        />
    </View>
);

// Defining Input component styles
const styles = StyleSheet.create({
    // Input container style
    inputContainer: {
        marginLeft: 20, // Left margin
        marginRight: 20, // Right margin
        shadowOpacity: 0.2, // Shadow opacity
        shadowRadius: 3, // Shadow blur radius
        shadowColor: "#000000", // Shadow color
        shadowOffset: {width: 2, height: 2}, // Shadow offset
    },
    // TextInput component style
    input: {
        height: 60, // Input field height
        backgroundColor: "#ffffff", // Input field background color
        paddingLeft: 10, // Left side padding
        paddingRight: 10, // Right side padding
    },
});

// Exporting Input component as default
export default Input;
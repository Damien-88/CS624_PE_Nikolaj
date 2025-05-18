import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

// Define functional component, takes prop `submitTodo`
const Button = ({submitTodo}) => (
    // Create container for button w/ styles
    <View style = {styles.buttonContainer}>
        {/* Used to create button with a highlight effect on press */}
        <TouchableHighlight 
            underlayColor = "#efefef" // Set color of highlight
            style = {styles.button} // Apply styles to button
            onPress = {submitTodo} // Call submitTodo function on button press
        >
            {/* Display "Submit" inside button */}
            <Text style={styles.submit}> 
                Submit
            </Text>
        </TouchableHighlight>
    </View>
)

// Define styles for button component
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "flex-end", // Align items to end of container
    },
    button: {
        height: 50, // Set height of button
        paddingLeft: 20, // Set left padding
        paddingRight: 20, // Set right padding
        backgroundColor: "#ffffff", // Set background color
        width: 200, // Set width of button
        marginRight: 20, // Set right margin
        marginTop: 15, // Set top margin
        borderWidth: 1, // Set border width
        borderColor: "rgba(0, 0, 0, 0.1)", // Set border color
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
    },
    submit: {
        color: "#666666", // Set text color
        fontWeight: "600", // Set font weight
    },
})

export default Button; // Export button component
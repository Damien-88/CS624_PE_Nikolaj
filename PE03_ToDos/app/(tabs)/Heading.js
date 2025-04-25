// Import modules from React & React Native
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Define functional component Heading
const Heading = () => (
    // Container View w/ styles
    <View style = {styles.header}>
        {/* Display "todos" w/ style */}
        <Text style = {styles.headerText}>todos</Text>
    </View>
);

// Define Heading component styles
const styles = StyleSheet.create({
    // Header container style
    header: {
        marginTop: 80, // Space out top of header
    },
    // Header text style
    headerText: {
        textAlign: "center", // Center text horizontally
        fontSize: 72, // Set font size to 72
        color: "rgba(175, 47, 47, 0.25)", // Set text color w/ transparency
        fontWeight: "100", // Sets font weight to thin
    },
});

// Export Heading component as the default
export default Heading;
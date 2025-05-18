import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from "react-native";

const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor = "#efefef" // Background color when pressed
        onPress = {setType} // Call setType on press
        style = {[
            styles.item, // Base tab style 
            selected ? styles.selected : null, // Apply selected background on press
            border ? styles.border : null, // Add left border on true
            type === title ? styles.selected : null // Highlight tab if selected
        ]}>
        <Text style = {[ 
            styles.itemText, // Base style text
            type === title ? styles.bold : null // Make bold if selected
        ]}>
            {title}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    item: {
        flex: 1, // Fills Space
        justifyContent: "center", // Center vertically
        alignItems: "center" // Center horizontally
    },
    border: {
        borderLeftWidth: 1, // Add to left border
        borderLeftColor: "#dddddd" // Border color
    },
    itemText: {
        color: "#777777", // Text color
        fontSize: 16 // Font size
    },
    selected: {
        backgroundColor: "#ffffff", //Selected background color
    },
    bold: {
        fontWeight: "bold" //Bold for selected
    }
});

// Export TabBar component as default
export default TabBarItem;
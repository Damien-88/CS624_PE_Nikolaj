import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ setType, type }) => (
    <View style = {styles.container}>
        <TabBarItem 
            type = {type} 
            title = "All" // Tab item for all todos
            selected = {type === "All"}
            setType = {() => setType("All")} // Calls setType on press
        />
        <TabBarItem 
            type = {type} 
            border title = "Active" // Tab item for active todos
            selected = {type === "All"}
            setType = {() => setType("Active")} // Calls setType on press
        />
        <TabBarItem 
            type = {type} 
            border title = "Complete" // Tab item for complete todos
            selected = {type === "All"}
            setType = {() => setType("Complete")} // Calls setType on press
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 70, // Set tab bar height
        flexDirection: "row", // Arrange horizontally
        borderTopWidth: 1, // Add top border
        borderTopColor: "#dddddd" // Top border color
    }
});

// Export TabBar component as default
export default TabBar;
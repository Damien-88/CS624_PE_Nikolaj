// Import necessary components and modules from React Native
import { View, Text, StyleSheet } from "react-native";

// Define functional component
const HelloWorld = () => {
  return (
    // Create container View, styles applied
    <View style={styles.container}>
      {/* Display first line of text*/}
      <Text style={styles.text}>Nikolaj Wochnik</Text>
      {/* Display second line of text*/}
      <Text style={styles.text}>MSCS</Text>
      {/* Display third line of text*/}
      <Text style={styles.text}>STC</Text>
    </View>
  );
};

// Define styles for components using StyleSheet
const styles = StyleSheet.create({
  // Style container View
  container: {
    flex: 1, // Take up available space
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "#DFFF00", // Set background color light yellow
  },

  // Style Text components
  text: {
    fontSize: 24, // Set font size 24
    fontWeight: "bold", // Make text bold
    color: "#000000", // Set text color black
    marginBottom: 10, // Add margin below each text element
  },
});

// Export HelloWorld component as default export
export default HelloWorld; 
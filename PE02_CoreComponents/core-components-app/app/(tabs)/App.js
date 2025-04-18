import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import icon from './icon.png';

const App = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={icon}
                    style={styles.pic}
                /> 
                <Text style={styles.title}>MSCS Courses</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>What is your favorite course:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter course name" 
                    placeholderTextColor="#888" 
                />
            </View>

            <View>
                <Text style={styles.sectionTitle}>Core Courses (24 Credits)</Text>
                <Text style={styles.sectionText}>1. CS504 Software Engineering</Text>
                <Text style={styles.sectionText}>2. CS506 Programming for Computing</Text>
                <Text style={styles.sectionText}>3. CS519 Cloud Computing Overview</Text>
                <Text style={styles.sectionText}>4. CS533 Computer Architecture</Text>
                <Text style={styles.sectionText}>5. CS547 Secure Systems and Programs</Text>
                <Text style={styles.sectionText}>6. CS622 Discrete Math and Algorithms for Computing</Text>
                <Text style={styles.sectionText}>7. DS510 Artificial Intelligence for Data Science</Text>
                <Text style={styles.sectionText}>8. DS620 Machine Learning & Deep Learning</Text>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Depth of Study (6 credits)</Text>
                <Text style={styles.sectionText}>1. CS624 Full-Stack Development I</Text>
                <Text style={styles.sectionText}>2. CS628 Full-Stack Development II</Text>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Capstone (3 credits)</Text>
                <Text style={styles.sectionText}>1. CS687 Computer Science Capstone</Text>
            </View>
            <View
                style={{height: 20}}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        backgroundColor: "#333333",
        alignItems: "center",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
        marginHorizontal: 12,
        marginTop: 10,
        marginBottom: 20,
    },
    pic: {
        width: 400,
        height: 400,
        marginBottom: 10,
    },
    inputContainer: {
        padding: 10,
    },
    label: {
        color: "#FFFFFF",
        fontSize: 18,
        marginHorizontal: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 12,
        color: "#FFFFFF",
    },
    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginHorizontal: 12,
        padding: 5,
    },
    sectionText: {
        color: "#FFFFFF",
        fontSize: 16,
        marginHorizontal: 12,
        padding: 5,
    },
});

export default App;
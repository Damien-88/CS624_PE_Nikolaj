import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class App extends Component {
    render() {
        return (
            <View style = {styles.container}>  
                <View style = {styles.cardContainer}>
                    <View style = {styles.cardImageContainer}>
                        <Image style = {styles.cardImage}
                                source = {require("../../assets/images/user.png")}/>  
                    </View>
                        <View>
                            <Text style = {styles.cardName}>
                                Nikolaj Wochnik
                            </Text>
                        </View>
                            <View style = {styles.cardOccupationContainer}>
                                <Text style = {styles.cardOccupation}>
                                    React Native Developer
                                </Text>
                            </View>
                        <View>
                            <Text style = {styles.cardDescription}>
                                Nikolaj is an okay JavaScript developer. He 
                                loves using JS to build React Native applications
                                for Android and, I guess, iOS.
                            </Text>    
                    </View>
                </View>
            </View>
        );
    };
};

const profileCardColor = "dodgerblue";  

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",  
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        alignItems: "center",
        borderColor: "black",
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "black",
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: "white",
        marginTop: 30,
    },
    cardOccupationContainer: {
        borderColor: "black",
        borderBottomWidth: 3,
    },
    cardOccupation: {
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
});
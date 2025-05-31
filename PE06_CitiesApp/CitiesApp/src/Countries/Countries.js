import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CenterMessage from "../components/CenterMessage";
import { colors } from "../theme";

export default class Countries extends React.Component {
  static navigationOptions = {
    title: "Countries",
    headerTitleStyle: {
      color: "white",
      fontSize: 20,
      fontWeight: "400",
    },
  };

  navigateToCountry = (item) => {
    this.props.navigation.navigate("Country", {
      country: item,
      countries: this.props.countries,
      addLocation: this.props.addLocation,
    });
  };

  navigateToCurrency = (item) => {
    this.props.navigation.navigate("Currency", {
      country: item,
      countries: this.props.countries,
    });
  };


  render() {
    const { countries } = this.props;
    return (
      <ScrollView contentContainerStyle = {[!countries.length && { flex: 1 }]}>
        <View style = {[!countries.length && { justifyContent: "center", flex: 1 }]}>
          {!countries.length && <CenterMessage message = "No saved countries!" />}
          {countries.map((item, index) => (
            <View key = {index} style = {styles.countryContainer}>
              <TouchableOpacity onPress = {() => this.navigateToCountry(item)}>
                <Text style = {styles.country}>{item.country}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.navigateToCurrency(item)}>
                <Text style = {styles.currency}>{item.currency}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: "rgba(0, 0, 0, .5)",
  },
});
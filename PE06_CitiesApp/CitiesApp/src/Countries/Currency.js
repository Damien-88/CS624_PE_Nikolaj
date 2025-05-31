import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../theme";
import CenterMessage from "../components/CenterMessage";

export default class Currency extends React.Component {
  state = {
    name: "",
    info: "",
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
    const { name, info } = this.state;
    const { country, addCurrencyInfo } = this.props.route.params;

    if (name === "" || info === "") return;

    const currency = { name, info };
    addCurrencyInfo(currency, country);

    this.setState({ name: "", info: "" });
  };

  render() {
    const { countries, country } = this.props.route.params;

    const updatedCountry = countries.find((item) => item.id === country.id) || country;
    const allCurrencies = Array.from(
      new Set(countries.map((c) => c.currency).filter(Boolean))
    );

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!allCurrencies.length && { flex: 1 }]}>
          <View
            style={[
              styles.currencyList,
              !allCurrencies.length && { justifyContent: "center", flex: 1 },
            ]}
          >
            {!allCurrencies.length && <CenterMessage message="No currencies available!" />}
            {allCurrencies.map((currency, index) => {
              const isUsed = updatedCountry.currency === currency;
              return (
                <View key={index} style={styles.currencyBox}>
                  <Text style={styles.currencyName}>{currency}</Text>
                  <Text style={styles.currencyInfo}>
                    {isUsed ? `${updatedCountry.country}'s Currency` : "Not used"}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>

        <TextInput
          onChangeText={(val) => this.onChangeText("name", val)}
          placeholder="Currency Name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText("info", val)}
          placeholder="Currency Info"
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currencyList: {
    paddingBottom: 104,
  },
  currencyBox: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  currencyName: {
    fontSize: 20,
  },
  currencyInfo: {
    color: "rgba(0, 0, 0, .5)",
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: "white",
    paddingHorizontal: 8,
    position: "absolute",
    width: "100%",
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

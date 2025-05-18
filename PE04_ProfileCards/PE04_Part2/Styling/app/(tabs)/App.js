import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const userImage = require("../../assets/images/user.png");

const data = Array(6).fill().map(() => ({
    image: userImage,
    name: "Nikolaj Wochnik",
    occupation: "React Native Developer",
    description: "Nikolaj is an okay Javascript developer. He loves using JS to build React Native applications for Android and, I guess.",
    showThumbnail: true
}));

const ProfileCard = (props) => {

  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  containerStyles.push(styles.cardScaleSmall);
  
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress = {onPress}>
      <View style = {[containerStyles]}>
        <View style = {styles.cardImageContainer}>
          <Image style = {styles.cardImage} source = {image}/>
        </View>
        <View>
          <Text style = {styles.cardName}>
            {name}
          </Text>
        </View>
        <View style = {styles.cardOccupationContainer}>
          <Text style = {styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style = {styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {

    const showThumbnail = !this.state.data[index].showThumbnail;

    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };

  render() {
    const list = this.state.data.map((item, index) => {
      const { image, name, occupation, description, showThumbnail } = item;
      return (
        <View key = {"card-" + index} style = {styles.cardWrapper}>
          <ProfileCard
            key = {"card-" + index}
            image = {image}
            name = {name}
            occupation = {occupation}
            description = {description}
            onPress = {() => this.handleProfileCardPress(index)}
            showThumbnail = {showThumbnail}
          />
        </View>
      );
    });

    return (
      <View style = {styles.container}>

        <View style = {styles.row}>
          <View style = {styles.cardWrapper}>{list[0]}</View>
          <View style = {styles.cardWrapper}>{list[1]}</View>
        </View>

        <View style = {styles.row}>
          <View style = {styles.cardWrapper}>{list[2]}</View>
          <View style = {styles.cardWrapper}>{list[3]}</View>
        </View>

        <View style = {styles.row}>
          <View style = {styles.cardWrapper}>{list[4]}</View>
          <View style = {styles.cardWrapper}>{list[5]}</View>
        </View>
      </View>
    );
  }
}

const profileCardColor = "dodgerblue";

const styles = StyleSheet.create({
  cardThumbnail: {
    transform: [{scale: 0.3}]
  },
  cardScaleSmall: {
    transform: [{scale: 0.8}]
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingBottom: 50
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 40,
    width: "90%"
  },
  cardWrapper: {
    flex: 1,
    max_width: "50%"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardContainer: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: "100%",
    height: 275,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
            height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 7.5,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
            height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: "black",
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 40,
    height: 40
  },
  cardName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 15,
    textShadowColor: "black",
    textShadowOffset: {
        height: 2,
        width: 2
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: "black",
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  cardDescription: {
    fontStyle: "italic",
    fontSize: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10
  },
});
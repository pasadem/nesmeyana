import React from "react";
import { styled } from "nativewind";
import { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
const head = require("../../assets/nesmiyaka_head.png");
const card2 = require("../../assets/prykmetnyk.png");
const card3 = require("../../assets/emotion.png");
const card4 = require("../../assets/task.png");
import { Card, Image } from "@rneui/themed";
import Noun from "./noun";
import { clients } from "../sampleData";


const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const Feed = (props) => {
  const [cardId, setCardId] = useState("");

 /*  const [cardList, setCardList] = useState([]);
  const handleClick = (id) => setCardId(id);
  useEffect(() => {
    const getCards = async () => {
      await setCardList(clients);
    };
    getCards();
  }, [handleClick]); */

  const handleClick = (id) => setCardId(id);

  return (
    <ImageBackground source={head} style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flex: 2,
          width: "100%",
          height: 400,

          alignItems: "center",
          padding: 20,
          borderLeftWidth: 0,
          flexWrap: "wrap",
        }}
      >
        <Noun handleClick={handleClick} cardId={cardId}  />
        <View
          style={{
            flex: 1,
            width: "100%",
            height: 100,
            backgroundColor: "black",
            marginBottom: 20,
          }}
        >
          <Image
            source={card2}
            style={{
              width: "100%",
              height: "100%",
              paddingVertical: 20,
            }}
            onPress={() => props.navigation.navigate("Прикметник")}
          >
            <Text style={styles.text}>Прикметник</Text>
          </Image>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: 100,
            backgroundColor: "red",
            marginBottom: 20,
          }}
        >
          <Image
            source={card3}
            style={{
              width: "100%",
              height: "100%",
              paddingVertical: 20,
            }}
            onPress={() => props.navigation.navigate("Емоція")}
          >
            <Text style={styles.text}>Емоція</Text>
          </Image>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: 200,
            backgroundColor: "blue",
          }}
        >
          <Image
            source={card4}
            style={{
              width: "100%",
              height: "100%",
              paddingVertical: 20,
            }}
            onPress={() => props.navigation.navigate("Прийменник")}
          >
            <Text style={styles.text}>Завдання</Text>
          </Image>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",

    fontSize: 40,
    margin: "5%",
  },
});
Feed.navigationOptions = {
  title: "Головна",
};
export default Feed;

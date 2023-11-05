import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Image } from "@rneui/themed";
import { clients } from "../sampleData";
const card1 = require("../../assets/imennyk.png");

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const Noun = ({ handleClick, cardId }) => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      await fetch("../sampleData.json");
    };
    const { clients } = getCards();
    setCardList(clients)
  }, []);
  const randomId = getRandomInt(2, 10);

  const randomCard = cardList.filter((x) => x.id === '2');
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        paddingVertical: 20,
      }}
    >
      <Image
        source={card1}
        style={{
          width: "100%",
          height: "100%",
          paddingVertical: 20,
        }}
        onPress={() => handleClick(randomId)}
      >
        <Text style={styles.box_name}>Іменник</Text>
        <Text style={styles.text}>{console.log(cardList)}</Text>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",

    fontSize: 40,
    margin: "5%",
  },
  box_name: {
    color: "white",

    fontSize: 20,
    marginLeft: 10,
  },
});
export default Noun;

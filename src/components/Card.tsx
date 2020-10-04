import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Card = {
  quote: string;
  author: string;
};

export const Card = (props: Card) => {
  const { quote, author } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>{quote}</Text>
      <Text style={styles.author}>&mdash; {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 20, borderWidth: 1, borderColor: "grey" },
  quote: {},
  author: {
    marginVertical: 12,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Card } from "./../components";
import { getRandomQuote } from "./../services";

export const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const get = await getRandomQuote();
      const res = get?.data ?? {};
      setQuote(res.quote?.body);
      setAuthor(res.quote?.author);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote Of The Day</Text>
      <Card quote={quote} author={author} />
      <View style={styles.btnGenerate}>
        <Button onPress={fetchData} title="Random Quote" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    marginBottom: 18,
    textAlign: "center",
    fontSize: 22,
  },
  btnGenerate: {
    marginVertical: 15,
  },
});

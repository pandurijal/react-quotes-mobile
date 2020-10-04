import React from "react";
import { View, Button } from "react-native";
import { Card } from "./../components";

export const Home = () => {
  return (
    <View>
      <Card
        quote="But what is happiness except the simple harmony between a man and the life he leads?"
        author="Albert Camus"
      />
      <Button
        onPress={() => console.log("button pressed")}
        title="Random Quote"
      />
    </View>
  );
};

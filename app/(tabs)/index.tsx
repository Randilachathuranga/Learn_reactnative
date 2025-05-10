import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/1.jpeg")} // Ensure this path is correct
      style={styles.image}
      resizeMode="cover" // <-- Moved here
    >
      <View>
        <Text style={styles.text}>Randila</Text>
      </View>

      <Link style={{ color: "white" }} href="../link/Details">View details</Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#a1af09",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 350,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a background color for better text visibility
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

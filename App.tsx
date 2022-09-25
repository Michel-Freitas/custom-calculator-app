import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ color: "#ffffff" }}>
        Meu Primeiro App com React Native, Expo e Typescript.
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
  },
});

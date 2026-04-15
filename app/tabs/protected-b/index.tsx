import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>protected b index</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { marginTop: 50 },
  text: { fontSize: 30 },
});

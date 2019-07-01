import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Vehicles extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Vehicles</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Vehicles;

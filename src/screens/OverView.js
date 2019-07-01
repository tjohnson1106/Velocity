import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Overview extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Overview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Overview;

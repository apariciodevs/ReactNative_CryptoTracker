import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>

      <View style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  largeTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});

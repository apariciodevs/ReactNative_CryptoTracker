import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ListAsset = ({name, symbol, price, priceVar, logoUrl}) => {

  const priceVarColor = priceVar > 0 ? '#34C759' : '#FF3B30';

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* left side */}

        <View style={styles.leftWrapper}>
          <Image style={styles.image} source={{ uri: logoUrl }} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.ref}>{symbol}</Text>
          </View>
        </View>
        {/* right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.price}>${price.toLocaleString('en-US', {currency: 'USD'})}</Text>
          <Text style={[styles.subPrice, {color: priceVarColor}]}>{priceVar.toFixed(4)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  ref: {
    fontSize: 14,
    color: "#A9ABB1",
    marginTop: 4,
    textTransform: 'uppercase'
  },
  price: {
    fontSize: 14,
    fontWeight: '700'
    
  },
  subPrice: {
    marginTop: 4,
    fontSize: 14,
  },
  image: {
    height: 40,
    width: 40,

  },
});

export default ListAsset;

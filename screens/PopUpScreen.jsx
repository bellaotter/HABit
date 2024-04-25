import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";



export default function PopUpScreen(props) {
  const { title } = props.route.params;


  // Style & return the view.
  return (
    <View style={styles.popupcontainer}>
      <View style={styles.poptextview}> 
        <Text style={styles.popuptext}> Water Quality </Text>
        <Text>test: {title}</Text>
      </View>

      <View>

      </View>

      <View>

      </View>

    </View>
  );
}
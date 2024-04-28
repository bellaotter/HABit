import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";




export default function PopUpScreen(props) {
  const { title } = props.route.params;


  // Style & return the view.
  return (
    <View style={styles.popupcontainer}>
      <View style={styles.poptextview}> 
        <Text style={styles.popuptext}> Water Quality </Text>
        <Text>test: {title}</Text>

        
      </View>
      <View style={styles.mapbox}> 
        

        
      </View>
      
      

      

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  popupcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  poptextview: {
    alignItems: "center",
    height:20,
    
  },
  mapbox: {
    alignItems: "center",
    marginTop: 30,
    margin: 12,
    height: 325,
    backgroundColor: 'blue',
    borderRadius: 20,
    
  },
  popuptext: {
    color: 'black',
    fontWeight: 'bold',
    
  },
});


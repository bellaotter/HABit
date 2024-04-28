import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



export default class WeatherWidget extends React.Component { 
  constructor(props) {
    super(props);
  }
  
  
  
  render() {
  let {title} = this.props;
  let {onPress} = this.props;
  let {chlor} = this.props;
  let {level_name} = this.props;
  let {shortDescription} = this.props;
 
  // const onPress = () => navigation.navigate("Play");
   
    return (

      
      
      <TouchableOpacity style={styles.container} onPress={onPress}>
        
       <View style={styles.box}>
         <View style={styles.buffer}>
            <View style={{height: '17%'}}>
            <Text style={ styles.text}> @  Water Quality </Text> 
            </View>
            <View style={{height:'20%'}}>
             <Text style={ styles.nameText}>{level_name} </Text> 
            </View>
            <View style={{height: '40%'}}>
            <Text style={ styles.chlorNum}>{chlor} μg/L</Text>
            </View>
            <View style={{height:'23%'}}>
            <Text style={ styles.descriptionText}> {shortDescription} </Text>
            </View>
         
         
        </View>
      
     
      </View>
      </TouchableOpacity> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: '#307DCB',
     width: "40%",
    //height: "width",
    aspectRatio: 1,
    
    //padding: 5,
    margin: 5,
  },
  box: {
    flex: 1,
    backgroundColor: '#307DCB',
    
    borderRadius: 10,
    
  },
  buffer: {
    margin: 8,
  },
  text: {
    color: '#A9D8FA',
    
  }, 
  nameText: {
    color: 'white',
    fontSize: 14,
  },    
  chlorNum: {
    
    color: 'white',
    fontSize: 45,
    
  
  },
  descriptionText: {
    color: 'white',
    fontSize: 13,
   
  }
  
});


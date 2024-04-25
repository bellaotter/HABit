import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



export default class WarningWidget extends React.Component { 
  constructor(props) {
    super(props);
  }
  
  render() {
  let {title} = this.props;
  let {onPress} = this.props;
  // const onPress = () => navigation.navigate("Play");
   
    return (
      
      <TouchableOpacity style={styles.container} onPress={onPress}>
        
       <View style={styles.box}>
         <View style={styles.buffer}>
         <Text style={ styles.text}> {title} </Text> 
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
    height: 150,
    
    //padding: 5,
    margin: 5,
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
   
    borderRadius: 10,
    
  },
  buffer: {
    margin: 5,
  },
  text: {
    color: '#A9D8FA',
    
  }
  
});
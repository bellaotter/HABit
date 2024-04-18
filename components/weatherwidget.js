import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default class WeatherWidget extends React.Component { 
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
      <Text style={{color: 'black',fontWeight: 'bold'}}> Clickable Weather Widget
      </Text> 
      </View>
      </TouchableOpacity> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: '#fff',
     width: "40%",
    //height: "width",
    aspectRatio: 1,
    
    //padding: 5,
    margin: 5,
  },
  box: {
    flex: 1,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderRadius: 10,
    
  },
  
});


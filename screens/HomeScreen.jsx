import React, {useState, useEffect} from 'react';
import { View, Image, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import { styles } from "../constants/Styles";
import WeatherWidget from "../components/weatherwidget";
import WarningWidget from '../components/warningwidget';

 


/* Our HomeScreen is a React Component. Remember, every component is just
    a function that takes in props and returns JSX. We usually use object
    destructuring to grab declare values we need from props right away.

    NEW EXPO CLI https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
*/

export default function HomeScreen(props) {

  const [selectedLocation, setSelectedLocation] = useState('Berkeley');

  const locationOptions = [
    { label: 'Berkeley', value: 'Berkeley' },
    { label: 'Alameda', value: 'Alameda' },
    { label: 'New York', value: 'New York' } ];
  
  const { navigation } = props;
  return (
    <ScrollView style= {{backgroundColor: "white"}}>
     <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/planet1.png")}
          style={styles.imageLogo}
        />
      
      </View>
      </View>

<Picker
  selectedValue={selectedLocation}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLocation(itemValue)
  }>
  {locationOptions.map((option, index) => (
          <Picker.Item
            key={index}
            label={option.label}
            value={option.value}
          />
        ))}
</Picker>
      <View style={{marginLeft: 5, marginRight:5}}>

      
      <View style={{ flexDirection: 'row', margin: 2.5}}>
      <WeatherWidget title={selectedLocation} onPress={() => navigation.navigate("Weather Pop Up", {title: selectedLocation})} />
      <WeatherWidget title={selectedLocation} onPress={console.log("HELLOOOO")}/>
      </View>
      <View style={{ flexDirection: 'row', margin: 2/5}}>
      <WarningWidget title={selectedLocation} onPress={console.log("HELLOOOO")}></WarningWidget>
      </View>
      <View style={{ flexDirection: 'row', margin: 2.5}}>
      <WeatherWidget title={selectedLocation} onPress={() => navigation.navigate("Weather Pop Up")} />
      <WeatherWidget title={selectedLocation} onPress={console.log("HELLOOOO")}/>
      </View>
      </View>
     
     <Text> End of View </Text>
      {/* To create a custom-styled button, we're using a <Text/> component wrapped in a 
            <TouchableOpacity/> component. TouchableOpacity takes in a function, onPress, that is called
            when the user taps on that view. Here, we navigate to the Play screen.  */}
      
    
    </ScrollView>
  );
}




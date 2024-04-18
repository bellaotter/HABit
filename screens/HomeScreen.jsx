import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";
import WeatherWidget from "../components/weatherwidget";

/* Our HomeScreen is a React Component. Remember, every component is just
    a function that takes in props and returns JSX. We usually use object
    destructuring to grab declare values we need from props right away.

    NEW EXPO CLI https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
*/
export default function HomeScreen(props) {
  
  const { navigation } = props;
  
  return (
    <ScrollView style= {{backgroundColor: "white",}}>
     <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/planet1.png")}
          style={styles.imageLogo}
        />
      
      </View>
      </View>
      <View style={{ flexDirection: 'row', margin: 15}}>
      <WeatherWidget title={"CustomTitle"} onPress={() => navigation.navigate("Weather Pop Up")} />
      <WeatherWidget title={"CustomTitle"} />
      </View>
     
     <Text> End of View </Text>
      {/* To create a custom-styled button, we're using a <Text/> component wrapped in a 
            <TouchableOpacity/> component. TouchableOpacity takes in a function, onPress, that is called
            when the user taps on that view. Here, we navigate to the Play screen.  */}
      
    
    </ScrollView>
  );
}




import React, {useState, useEffect} from 'react';
import { View, Image, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import { styles } from "../constants/Styles";
import WeatherWidget from "../components/weatherwidget";
import WarningWidget from '../components/warningwidget';
import Widget from '../components/widget';

// Required for side-effects
import { collection, query, where, getDocs, docSnap, doc, getDoc } from "firebase/firestore";
import { app, db } from "../components/firebase.js";








/* Our HomeScreen is a React Component. Remember, every component is just
    a function that takes in props and returns JSX. We usually use object
    destructuring to grab declare values we need from props right away.

    NEW EXPO CLI https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
*/
  


export default function HomeScreen(props) {
  const [locations, setLocations] = useState([{ label: 'empty', value: 'empty', mostrecent: 'empty'}]);
  const [selectedLocation, setSelectedLocation] = useState('Berkeley');

 
  async function foo() {
    const q = query(collection(db, "locations"));
    const querySnapshot = await getDocs(q);
    const locs = []
    
    querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       // const docRef = doc(db, "cities", doc.id);
       console.log(doc.id, " => ", doc.data());
       
       locs.push({label: doc.data().name, value: doc.id, mostrecent: doc.data().mostrecent});
    });
    console.log("locs: ", locs)
    
    setLocations(locs);
    return locs
  }

 


  
  
  async function fetchData(){
    let output = await foo();
    console.log('Result is ' + JSON.stringify(output)); // Output is 1 
    //fetchWeather();
    
   }

   
  
  useEffect(() => {
    console.log("HIIIIIII")
  //  async function fetchData() {
   //   await foo(); // Call foo when component mounts
  //  }
    fetchData();
    
  }, []);

  

  const { navigation } = props;
  return (
    <ScrollView style= {{backgroundColor: "white"}}>
     <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/habitlogo.png")}
          style={styles.imageLogo}
        />
      
      </View>
      </View>

<Picker
  selectedValue={selectedLocation}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLocation(itemValue)
    
  }>
  {locations.map((option, index) => (
          <Picker.Item
            key={index}
            label={option.label}
            value={option.value}
          />
        ))}
</Picker>
      <View style={{marginLeft: 5, marginRight:5}}>

      
      <View style={{ flex: 1, flexDirection: 'row', margin: 2.5,  justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{  height: 190}} onPress={() => navigation.navigate("Water Quality", { selectedLocation: locations.find(item => item.value === selectedLocation).mostrecent})}> 
      <Widget initialValue={selectedLocation} mostRecent={locations.find(item => item.value === selectedLocation)} onPress={console.log("hi")}></Widget>
      </TouchableOpacity >
      <TouchableOpacity style={{ height: 190}} onPress={() => navigation.navigate("Water Quality")}>
      <Widget initialValue={selectedLocation} mostRecent={locations.find(item => item.value === selectedLocation)} onPress={console.log("hi")}></Widget>
      </TouchableOpacity>
      </View>

      
      
      </View>

      <View style={styles.container}>
      <View style={styles.imageView1}>
        <Image
          source={require("../assets/planet1.png")}
          style={styles.imageLogo}
        />
        <Image
          source={require("../assets/habitlogo.png")}
          style={styles.imageLogo}
        />
        
        
      
      </View>
      </View>
     
    
      {/* To create a custom-styled button, we're using a <Text/> component wrapped in a 
            <TouchableOpacity/> component. TouchableOpacity takes in a function, onPress, that is called
            when the user taps on that view. Here, we navigate to the Play screen.  */}
      
    
    </ScrollView>
  );
}




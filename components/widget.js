import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { collection, query, where, getDocs, docSnap, doc, getDoc } from "firebase/firestore";
import { app, db } from "../components/firebase.js";



const Widget = ({ onPress, initialValue, mostRecent }) => {
    // State to hold the value
    const [value, setValue] = useState(initialValue);
    const [obj, setObj] = useState( {"bay": "Sample Bay", "chlor_a": "7", "dateCaptured": {"nanoseconds": 949000000, "seconds": 1714020687}, "geojson": "", "level-nickname": "Moderate", "level-propername": "Eutrophic", "level_name": "Moderate Algal Bloom", "longDescription": "longDescription", "shortDescription": "short"}
    );

    async function goo() {
    
        
        if (true){
          const docRef = doc(db, "satellitedata", mostRecent["mostrecent"]);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setObj(docSnap.data())
            console.log("DATA ", docSnap.data());
            
            return docSnap.data()
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
          
          
        }
      }

      async function fetchWeather(selectedLocation){
        let output = await goo();
        console.log('Result is' + JSON.stringify(output)); // Output is 1 
        return output
       }


  
    // useEffect hook to perform side effects
    useEffect(() => {
      // Perform any side effect here, like API calls, subscriptions, etc.
      // For this example, let's just log the value to the console
      console.log(initialValue);
      setValue(initialValue);
      if (mostRecent) {
        console.log('Value changed:', mostRecent["mostrecent"]);
        const output = fetchWeather(initialValue);
        console.log('Result2 is' + JSON.stringify(output)); // Output is 1
      }
      
      // Cleanup function (optional)
      return () => {
        // Cleanup logic here (if needed)
        console.log('Component unmounted or value changed');
      };
    }, [initialValue]); // Depend on 'value' to re-run effect when 'value' changes
  
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
        
        <View style={styles.box}>
          <View style={styles.buffer}>
             <View style={{height: '17%'}}>
             <Text style={ styles.text}> @  Water Quality </Text> 
             </View>
             <View style={{height:'20%'}}>
              <Text style={ styles.nameText}> {obj["level_name"]} </Text> 
             </View>
             <View style={{height: '40%'}}>
             <Text style={ styles.chlorNum}> {obj["chlor_a"]} μg/L</Text>
             </View>
             <View style={{height:'23%'}}>
             <Text style={ styles.descriptionText}> {obj["shortDescription"]} </Text>
             </View>
          
          
         </View>
       
      
       </View>
       </TouchableOpacity> 
    );
  };
  
export default Widget;

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


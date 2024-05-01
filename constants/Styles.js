import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  imageView: { height: "10%", width: "100%", alignItems: "center", paddingBottom: 0,},
  imageView1: { flexDirection:'row',height: "10%", width: "100%", alignItems: "center", paddingBottom: 0, marginTop: 30,},
  imageLogo: {
    flex: 1,
    width: 100,
    height: 50,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 0,
    resizeMode: "contain",
  },
  image: {
    justifyContent: "center",
    margin: 10,
    height: "30%",
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  popupcontainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  poptextview: {
    alignItems: "center",
  },
  popuptext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    
  },
  
  

});

export { styles };

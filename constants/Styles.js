import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  imageView: { height: "20%", width: "100%", alignItems: "center", paddingBottom: 10,},
  imageLogo: {
    flex: 1,
    width: 100,
    height: 60,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  image: {
    justifyContent: "center",
    margin: 10,
    height: "30%",
    width: "100%",
    resizeMode: "contain",
  },
  

});

export { styles };

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import InjectColor from "../component/InjectColor";
import { WebView } from "react-native-webview";

const HomeScreen = () => {
  const [displayColor,setDisplayColor] = useState('lightgray')
  return (
    <View style={styles.container}>
      <View style={styles.colorInputsContainer}>
        <View style={styles.colorTextsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please put a color exm: #fff or tomato"
          />
          <TextInput
            style={[styles.inputShowColor, { backgroundColor: displayColor }]}
            editable={false}
          />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Change Color</Text>
        </TouchableOpacity>
        <InjectColor bgColor="#445d7a"/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  colorInputsContainer: {},
  colorTextsContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 4,
    borderColor: "#445d7a",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    backgroundColor: "lightgray",
    fontWeight:'bold',
    color:"#445d7a"
  },
  inputShowColor: {
    flex: 1,
    borderColor: "#445d7a",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    backgroundColor: "lightgray",
  },
  button:{
     backgroundColor:"#445d7a",
     paddingVertical:12,
     borderRadius:5,
     shadowColor:"gray",
     shadowOffset:{width:0, height:2},
     shadowOpacity:0.2,
     shadowRadius:3,
     elevation:3,
     alignItems:'center',
     marginHorizontal:60
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  }
});

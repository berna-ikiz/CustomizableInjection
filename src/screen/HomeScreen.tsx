import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import InjectColor from "../component/InjectColor";

   // check colour input value
  const isValidColor = (color: string): boolean => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  
  const rgbRegex = /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*[01]?\d*\.?\d+\s*)?\)$/i;
  
  const cssColors = [
    'red', 'green', 'blue', 'black', 'white', 
    'tomato', 'lightblue', 'gold', 'pink', 'purple'
  ];

  return (
    hexRegex.test(color) || 
    rgbRegex.test(color) || 
    cssColors.includes(color.toLowerCase())
  );
};

const HomeScreen = () => {
  const [displayColor, setDisplayColor] = useState('');
  const [colorInput, setColorInput] = useState('');

  const handleColorChange = () => {
    const colorText = colorInput.toLowerCase();
    if (colorText.trim()) {
      if (isValidColor(colorText)) {
      setDisplayColor(colorText);
      setColorInput('');
      setDisplayColor(colorText);
      }else{
        Alert.alert('please put a proper color')
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.colorInputsContainer}>
        <View style={styles.colorTextsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please put a color exm: #fff or tomato"
            onChangeText={setColorInput}
            value={colorInput}
          />
          <TextInput
            style={[styles.inputShowColor, { backgroundColor: displayColor }]}
            editable={false}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleColorChange}>
        <Text style={styles.buttonText}>Change Color</Text>
      </TouchableOpacity>
      <View style={styles.webViewContainer}>
        <InjectColor bgColor={displayColor} />
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
    fontWeight: "bold",
    color: "#445d7a",
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
  button: {
    backgroundColor: "#445d7a",
    paddingVertical: 12,
    borderRadius: 5,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: "center",
    marginHorizontal: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  webViewContainer: {
    flex: 1,
    marginTop: 10,
  },
});

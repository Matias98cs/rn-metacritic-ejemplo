import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";

// const icon = require("./assets/icon.png")
import icon from "./assets/icon.png";
import { useState } from "react";

export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ color: "white" }}>Estupidos bellacos!</Text>
      {/* <Image 
        source={icon} 
        style={{ width: 100, height: 100, resizeMode: "center" }}
        borderRadius={10}
        // blurRadius={8}
        fadeDuration={2}

      /> */}
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/doblaje/images/3/35/1681016602835_5k6ukm_2_0.jpg/revision/latest?cb=20230409051238&path-prefix=es",
        }}
        style={{ width: 300, height: 200, resizeMode: "center" }}
        fadeDuration={2}
      />

      {/* //boton nativo, no se puede cambiar los estilos, solo el color */}
      <Button
        // color=""
        title="Pulsa aqui"
        onPress={() => console.log("Estupido bellaco")}
        // onPress={() => alert("Estupido bellaco!")}
      />

      {/* //boton con estilosd */}
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => console.log("Estupido bellaco")}
        style={{
          width: 100,
          height: 50,
          backgroundColor: "red",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>Estupido bellaco!</Text>
      </TouchableHighlight>

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { useState } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [input, setInput] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ]
  const handleClear = () => {
    setInput("0");
  }

  const onPress = (value: any) => {
    if (value === "C") {
      handleClear();
    } else {
      setInput(input + value)
    }
  }
  return (
    <View style={styles.container}>
      {/* Display Result  */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>


      <View style={styles.btnContainer}>
        {buttons.map((btn, idx) => {
          return <TouchableOpacity key={idx} style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{btn}</Text>
          </TouchableOpacity>
        })}
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    padding: 20,
  },

  display: {
    marginBottom: 20,
    alignItems: "flex-end",
  },

  displayText: {
    fontSize: 40,
    color: "#fff",
  },

  btnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  btn: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#333",
  },

  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
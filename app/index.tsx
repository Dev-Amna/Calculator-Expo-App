import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState();

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ]
  const handleClear = () => {
    setInput("");
  }


  const handleEqual = () => {
    try {
      if (!input) return;

      let opr = "";

      if (input.includes("+")) opr = "+";
      else if (input.includes("-")) opr = "-";
      else if (input.includes("*")) opr = "*";
      else if (input.includes("/")) opr = "/";

      if (!opr) return;

      const parts = input.split(opr);
      const num1 = parseFloat(parts[0]);
      const num2 = parseFloat(parts[1]);

      let result = 0;

      if (opr === "+") result = num1 + num2;
      if (opr === "-") result = num1 - num2;
      if (opr === "*") result = num1 * num2;
      if (opr === "/") result = num1 / num2;

      setAnswer(result);
      setInput("");
    } catch (error) {
      console.log("Calculation Error");
    }
  };
  const onPress = (value: any) => {
    if (value === "C") {
      handleClear();
    }
    else if (value === "=") {
      handleEqual();
    } else {
      setInput(input + value)
    }
  }
  return (
    <View style={styles.container}>
      {answer ? <Text style={styles.displayText}>ans : {answer} </Text> : null}
      {/* Display Result  */}
      <View style={styles.display}>
        {/* <Text style={styles.displayText}>{answer}</Text> */}
        <Text style={styles.displayText}>{input || 0}</Text>
      </View>


      <View style={styles.btnContainer}>
        {buttons.map((btn, idx) => {
          return <TouchableOpacity key={idx} style={styles.btn} onPress={() => onPress((btn))}>
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
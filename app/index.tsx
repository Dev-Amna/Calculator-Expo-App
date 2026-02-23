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
    setAnswer();
  }


  const handleEqual = () => {
    try {
      if (!input) return;

      const result = Function(`return ${input}`)();
      setAnswer(result);
      setInput("");
    } catch (error) {
      setInput("Calculation Error");
    }
  };


  const onPress = (value: string) => {
    if (input === "Calculation Error") {
      setInput("");
    }
    if (value === "C") {
      handleClear();
    }
    else if (value === "=") {
      handleEqual();
    } else {
      setInput(prev => prev + value);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator App</Text>

      <View>
        {answer !== undefined && (<Text style={styles.displayText}>ans : {answer} </Text>)}
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

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
  },
  heading: {
    fontSize: 40,
    color: "white",
    marginTop: 83
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
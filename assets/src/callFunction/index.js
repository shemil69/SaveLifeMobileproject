import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import call from "react-native-phone-call";

const CallFunction = () => {
  const [inputValue, setInputValue] = useState("0701169644");

  const callTRY = () => {
    const args = {
      number: inputValue,
      prompt: true,
    };
    call(args).create(console.error);
  };

  return (
    <View>
      <Text>I am working with call function</Text>

      <View>
        <TouchableOpacity onPress={callTRY} >
          <Text style={styles.tuope}>Press Me for call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    tuope:{
        margin:'20%',
        fontSize:20
    }


});

export default CallFunction;

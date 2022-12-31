import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import {Button,View,Text,StyleSheet,TouchableOpacity,Image,TextInput,} from "react-native";


const LoginScreen = ({navigation}) => {

    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
      <View style={styles.container3}>
        <View>
          <Text style={styles.TextHead}>SAVE LIFE BLOOD BANK</Text>
        </View>
        <View style={styles.content}>
        <Image style={styles.image} source={require("../images/blood-bank.webp")} />
  
          <Text style={styles.label2}>User Name</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Username) => setUserName(Username)}
          />
  
          <Text style={styles.label2}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
            onChangeText={(Password) => setPassword(Password)}
          />
  
          <View>
            <TouchableOpacity style={styles.RegisterBtn}>
              <Text style={styles.RegisterText}>Register</Text>
            </TouchableOpacity>
          </View>
  
          <Button title="Login" onPress={() => navigation.push("Category")} />
          <View style={styles.fixToTxt}>
            <Button
              title="Forgot Password"
              onPress={() => navigation.navigate("Forgot Password")}
            />
  
            <Button
              title="Registration"
              onPress={() => navigation.navigate("Registration")}
            />
            
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    
    container3: {
      flex: 1,
      width: "100%",
      marginTop: "0%",
      backgroundColor: "#fff",
    },
    input: {
      borderStyle: "solid",
      borderColor: "#B7B7B7",
      borderRadius: 7,
      borderWidth: 1,
      fontSize: 15,
      height: 50,
      marginHorizontal: 10,
      paddingStart: 10,
      marginBottom: 15,
    },
    content: {
      width: "90%",
      marginTop: "10%",
    },
    
    label2: {
      marginHorizontal: 10,
      marginBottom: 15,
      fontWeight: "bold",
    },
  
    text: {
      fontWeight: "bold",
      alignItems: "center",
      fontSize: 20,
      marginTop: "-20%",
    },
  
    TextHead: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      marginTop: "1%",
    },
  
    image: {
      marginBottom: 30,
      width: 200,
      height: 200,
      marginHorizontal: "20%",
    },
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "70%",
      height: 50,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontWeight: "bold",
      borderColor: "#B7B7B7",
    },
  
    RegisterBtn: {
      width: "90%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#FF1493",
      marginHorizontal: "2%",
    },
  
    fixToText: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "-30%",
    },
    fixToTxt: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "10%",
    },
  
    TextBody: {
      fontSize: 12,
      textAlign: "justify",
      marginLeft: "0.99%",
      marginVertical: 8,
      marginHorizontal: 6,
      fontWeight: "bold",
      color: "red",
    },
    
    label: {
      marginBottom: 7,
      marginStart: 10,
      fontWeight: "bold",
    },
  
    inputView1: {
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "70%",
      height: 50,
      marginBottom: 20,
      alignItems: "center",
    }, 
  });
   
  export default LoginScreen;
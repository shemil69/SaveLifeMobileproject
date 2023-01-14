import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import {Button,View,Text,StyleSheet,TouchableOpacity,Image,TextInput,} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";

const AdddonorScreen = ({navigation}) =>{
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState("");
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [donation, setDonation] = useState("");

const navigations = useNavigation();

    const renext=()=>{
      navigations.navigate('Donor Blood Detail',{
        name:name,
        birth:birth,
        address:address,
        id:id,
        number1:number1,
        number2:number2,
        donation:donation,
      });
    };

    return (
      <ScrollView>
      <View style={styles.container3}>
        
        <View style={styles.content2}>
          <Text style={styles.label2}>Donor Name</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Name) => setName(Name)}
          />
  
          <Text style={styles.label2}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Birth) => setBirth(Birth)}
          />
  
          <Text style={styles.label2}>Donor Address</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Address) => setAddress(Address)}
          />
  
          <Text style={styles.label2}>National ID Number</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Id) => setId(Id)}
          />
  
          <Text style={styles.label2}>Contact Number 1</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Number1) => setNumber1(Number1)}
          />
  
          <Text style={styles.label2}>Contact Number 2</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Number2) => setNumber2(Number2)}
          />
  
          <Text style={styles.label2}>Last Blood Donation</Text>
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={(Donation) => setDonation(Donation)}
          />
        </View>
  
        <Button
          title="NEXT"
          onPress={() => renext()}
        />
      </View>
    </ScrollView>
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
    content2: {
      width: "90%",
      marginTop: "0.5%",
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
     
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontWeight: "bold",
      borderColor: "#B7B7B7",
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
    
  
    
  });
  export default AdddonorScreen;
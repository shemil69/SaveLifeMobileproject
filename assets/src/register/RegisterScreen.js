import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { SelectList } from "react-native-dropdown-select-list";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { allowsVoipAsync } from "expo-cellular";
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }) => {
  
 
 
const [clusteropn, setclusteropn] = useState("Ampara");
const [subbranch, setsubbranch] = useState("");
const catogaries = [
  { key: "Ampara", value: "Ampara" },
  { key: "Anuradhapura", value: "Anuradhapura" },
  { key: "Badulla", value: "Badulla" },
  { key: "Batticaloa", value: "Batticaloa" },
  { key: "CIM", value: "CIM" },
  { key: "CNTH", value: "CNTH" },
  { key: "Jaffna", value: "Jaffna" },
  { key: "Kalutara", value: "Kalutara" },
  { key: "Kamburugamuwa", value: "Kamburugamuwa" },
  { key: "Kandy", value: "Kandy" },
  { key: "Karapitiya", value: "Karapitiya" },
  { key: "Kurunegala", value: "Kurunegala" },
  { key: "NBC", value: "NBC" },
  { key: "Rathnapura", value: "Rathnapura" },
  { key: "Trincomalee", value: "Trincomalee" },
  { key: "Vavuniya", value: "Vavuniya" },

];
const subcatogary = {
  'Ampara':[
    { key: "Ampara", value: "Ampara" },
    { key: "ampara sub", value: "ampara sub" },
  ],
  'Anuradhapura':[
    { key: "Anuradhapura", value: "Anuradhapura" },
    { key: "Anuradhapura sub", value: "Anuradhapura sub" },
  ],
  'Badulla':[
    { key: "Ampara", value: "Ampara" },
    { key: "ampara sub", value: "ampara sub" },
  ],
  'Batticaloa':[
    { key: "Badulla", value: "Badulla" },
    { key: "Badulla sub", value: "Badulla sub" },
  ],
  'CIM':[
    { key: "CIM", value: "CIM" },
    { key: "CIM sub", value: "CIM sub" },
  ],
  'CNTH':[
    { key: "CNTH", value: "CNTH" },
    { key: "CNTH sub", value: "CNTH sub" },
  ],
  'Jaffna':[
    { key: "Jaffna", value: "Jaffna" },
    { key: "Jaffna sub", value: "Jaffna sub" },
  ],
  'Kalutara':[
    { key: "Kalutara", value: "Ampara" },
    { key: "Kalutara sub", value: "ampara sub" },
  ],
  'Kamburugamuwa':[
    { key: "Kamburugamuwa", value: "Ampara" },
    { key: "Kamburugamuwa sub", value: "ampara sub" },
  ],
  'Kandy':[
    { key: "Kandy", value: "Ampara" },
    { key: "Kandy sub", value: "ampara sub" },
  ],
  'Karapitiya':[
    { key: "Karapitiya", value: "Ampara" },
    { key: "Karapitiya sub", value: "ampara sub" },
  ],
  'Kurunegala':[
    { key: "Kurunegala", value: "Ampara" },
    { key: "Kurunegala sub", value: "ampara sub" },
  ],
  'NBC':[
    { key: "NBC", value: "Ampara" },
    { key: "NBC sub", value: "ampara sub" },
  ],
  'Rathnapura':[
    { key: "Rathnapura", value: "Ampara" },
    { key: "Rathnapura sub", value: "ampara sub" },
  ],
  'Trincomalee':[
    { key: "Trincomalee", value: "Trincomalee" },
    { key: "Trincomalee sub", value: "Trincomalee sub" },
  ],
  'Vavuniya':[
    { key: "Vavuniya", value: "Vavuniya" },
    { key: "Vavuniya sub", value: "Vavuniya sub" },
  ],
};
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmpassword, setConfirmpassword] = useState([]);
  const [mobileNumber, setmobileNumber] = useState([]);
  //const for form validation
  const [data, setData] = React.useState({
    confrmpass: '',
    chechInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidcmfPassword: true,
  });

  //form validation
  
  const handleValidUser = (val) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleValidPassword = (val) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };
  const handleValidcmfPassword = (val) => {
    if (val.trim().length > 0  || password == confirmpassword ) {
      setData({
        ...data,
        isValidcmfPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidcmfPassword: false,
      });
    }
  };

  //Db start-----------------
  //for insert value to userRegistation
  const bloodBankUserReg = () => {
    if (
      username.length == 0 ||
      password.length == 0 ||
      confirmpassword.length == 0
      
    ) {
      alert("Required field is missing");
      
      
    } else {
      // Variable for declare local Api path
      var InsertApiURL = "http://10.0.2.2:80/api/insert.php";

      //this contain header related component
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var dataobj = {};
      (dataobj.Cluster = clusteropn),
        (dataobj.Bloodbank = subbranch),
        (dataobj.Username = username),
        (dataobj.Password = password),
        (dataobj.Confirmpassword = confirmpassword);
        (dataobj.MobileNumber = mobileNumber);

      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responce) => {
          alert(responce[0].Message);
          navigation.navigate("Login");
        })
        //hndle exception
        .catch((error) => {
          alert("Error" + error);
        });
    }
  };

  return (
    <View style={styles.container3}>
     <ScrollView>
      <View>
        <Text style={styles.TextHead}>REGISTER BLOOD BANK</Text>
      </View>
      <View style={styles.content}>
        <View style={{ zIndex: 2 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Cluster Center</Text>
            <SelectList
              setSelected={setclusteropn}
              data={catogaries}
              placeholder={"Slect cluster center"}
              
            />
          </View>
        </View>

        <View style={{ zIndex: 1 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Blood Bank</Text>
            <SelectList
               setSelected={setsubbranch}
               data={subcatogary[clusteropn]}
               placeholder={"Slect cluster center"}
            />
          </View>
        </View>

        <Text style={styles.label2}>User Name</Text>
        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(Username) => setUsername(Username)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
        />
        {data.isValidUser ? null : <Text>Please add username</Text>}

        <Text style={styles.label2}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          onChangeText={(Password) => setPassword(Password)}
          onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
        />
        {data.isValidPassword ? null : (
          <Text>Please User Name and Password</Text>
        )}
        <Text style={styles.label2}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          onChangeText={(Confirmpassword) =>
            setConfirmpassword(Confirmpassword)
          }
          onEndEditing={(e) => handleValidcmfPassword(e.nativeEvent.text)}
        />
        {data.isValidcmfPassword ? null : (
          <Text>Please confrom your password</Text>
        )}
         <Text style={styles.label2}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          secureTextEntry={false}
          selectionColor={"#5188E3"}
          onChangeText={(MobileNumber) =>
            setmobileNumber(MobileNumber)
          }
          
        />
       
      </View>
    
      <View>
        <TouchableOpacity style={styles.RegisterBtn} onPress={bloodBankUserReg}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-50%",
  },

  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-120%",
  },

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
  logo: {
    marginBottom: 30,
    width: 300,
    height: 300,
    marginTop: "-20%",
    marginHorizontal: "10%",
  },

  img: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: "5%",
    marginLeft: "-40%",
  },

  dropdownAge: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: "93%",
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
    
  },
  placeholderStyles: {
    color: "black",
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
export default RegisterScreen;

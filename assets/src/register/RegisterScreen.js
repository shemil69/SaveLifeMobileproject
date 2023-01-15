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
import DropDownPicker from "react-native-dropdown-picker";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { allowsVoipAsync } from "expo-cellular";

const RegisterScreen = ({ navigation }) => {
  const [clusterOpen, setClusterOpen] = useState(false);
  const [clusterValue, setClusterValue] = useState(null);
  const [cluster, setCluster] = useState([
    { label: "Ampara", value: "Ampara" },
    { label: "Anuradhapura", value: "Anuradhapura" },
    { label: "Badulla", value: "Badulla" },
    { label: "Batticaloa", value: "Batticaloa" },
    { label: "CIM", value: "CIM" },
    { label: "CNTH", value: "CNTH" },
    { label: "Jaffna", value: "Jaffna" },
    { label: "Kalutara", value: "Kalutara" },
    { label: "Kamburugamuwa", value: "Kamburugamuwa" },
    { label: "Kandy", value: "Kandy" },
    { label: "Karapitiya", value: "Karapitiya" },
    { label: "Kurunegala", value: "Kurunegala" },
    { label: "NBC", value: "NBC" },
    { label: "Rathnapura", value: "Rathnapura" },
    { label: "Trincomalee", value: "Trincomalee" },
    { label: "Vavuniya", value: "Vavuniya" },
  ]);
  const [bloodbankOpen, setBloodbankOpen] = useState(false);
  const [bloodbankValue, setBloodbankValue] = useState(null);
  const [bloodbank, setBloodbank] = useState([
    { label: "Akkaraipattu", value: "Akkaraipattu" },
    { label: "Ampara", value: "Ampara" },
    { label: "Batticaloa", value: "Batticaloa" },
    { label: "Badulla", value: "Badulla" },
    { label: "Colombo", value: "Colombo" },
    { label: "Dambulla", value: "Dambulla" },
    { label: "Dikkoya", value: "Dikkoya" },
    { label: "Gampaha", value: "Gampaha" },
    { label: "Gampola", value: "Gampola" },
    { label: "Homagama", value: "Homagama" },
    { label: "Horana", value: "Horana" },
    { label: "Jaffna", value: "Jaffna" },
    { label: "Kandy", value: "Kandy" },
    { label: "Kegalle", value: "Kegalle" },
    { label: "Killinochchi", value: "Killinochchi" },
    { label: "Mannar", value: "Mannar" },
    { label: "NuwaraEliya", value: "NuwaraEliya" },
    { label: "Polonnaruwa", value: "Polonnaruwa" },
    { label: "Ratnapura", value: "Ratnapura" },
    { label: "Trincomalee", value: "Trincomalee" },
    { label: "Vavuniya", value: "Vavuniya" },
  ]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmpassword, setConfirmpassword] = useState([]);

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
      (dataobj.Cluster = clusterValue),
        (dataobj.Bloodbank = bloodbankValue),
        (dataobj.Username = username),
        (dataobj.Password = password),
        (dataobj.Confirmpassword = confirmpassword);

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
          alert("Wrong" + error);
        });
    }
  };

  return (
    <View style={styles.container3}>
      <View>
        <Text style={styles.TextHead}>REGISTER BLOOD BANK</Text>
      </View>
      <View style={styles.content}>
        <View style={{ zIndex: 2 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Cluster Center</Text>
            <DropDownPicker
              style={styles.dropdown}
              open={clusterOpen}
              value={clusterValue}
              items={cluster}
              setOpen={setClusterOpen}
              setValue={setClusterValue}
              setItems={setCluster}
              placeholder="Select Cluster Center "
              placeholderStyle={styles.placeholderStyles}
              maxHeight={100}
            />
          </View>
        </View>

        <View style={{ zIndex: 1 }}>
          <View style={styles.dropdownAge}>
            <Text style={styles.label2}>Blood Bank</Text>
            <DropDownPicker
              style={styles.dropdown}
              open={bloodbankOpen}
              value={bloodbankValue}
              items={bloodbank}
              setOpen={setBloodbankOpen}
              setValue={setBloodbankValue}
              setItems={setBloodbank}
              placeholder="Select Blood Bank "
              placeholderStyle={styles.placeholderStyles}
              maxHeight={100}
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
      </View>

      <View>
        <TouchableOpacity style={styles.RegisterBtn} onPress={bloodBankUserReg}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
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

import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
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

const BlooddetailScreen = () => {
  const route = useRoute();

  const [ageOpen, setAgeOpen] = useState(false);
  const [ageValue, setAgeValue] = useState(null);
  const [age, setAge] = useState([
    { label: "Between 18-60 Years", value: "eligible" },
    { label: "Above 60 Years", value: "above age limit" },
  ]);
  const [weightOpen, setWeightOpen] = useState(false);
  const [weightValue, setWeightValue] = useState(null);
  const [weight, setWeight] = useState([
    { label: "Between 50Kg to 75Kg", value: "not eligible" },
    { label: "75Kg or more", value: "eligible" },
  ]);
  const [bloodOpen, setBloodOpen] = useState(false);
  const [bloodValue, setBloodValue] = useState(null);
  const [blood, setBlood] = useState([
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ]);
  const [hemoglobinOpen, setHemoglobinOpen] = useState(false);
  const [hemoglobinValue, setHemoglobinValue] = useState(null);
  const [hemoglobin, setHemoglobin] = useState([
    { label: "Men-13.0 g/dl ", value: "13.0 g/dl" },
    { label: "Female-12.5 g/dl", value: "12.5 g/dl" },
  ]);

  // Save details in db
  const DonorReg = () => {
    if (
     false
    ) {
      alert("Required field is missing");
    } else {  
      

        

      var InsertApiURL = "http://10.0.2.2:80/api/DonorRegister.php";

      //this contain header related component
      var headers = {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      };
      var dataobj = {};
        (dataobj.Name = route.params.name),
        (dataobj.Birth = route.params.birth),
        (dataobj.Address = route.params.address),
        (dataobj.Id = route.params.id),
        (dataobj.Number1 = route.params.number1),
        (dataobj.Number2 = route.params.number2),
        (dataobj.Donation = route.params.donation),
        (dataobj.Age = ageValue),
        (dataobj.Weight = weightValue),
        (dataobj.BloodType = bloodValue),
        (dataobj.Hemoglobinlvl = hemoglobinValue);
        
    
      
      fetch(InsertApiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataobj),
        
      })
        //whether output api json or not
        .then((responce) => responce.json())
        .then((responce) => {
          alert(responce[0].Message);
        })
        //hndle exception
        .catch((error) => {
          alert("Error " + error);
        });
    }
  };

  return (
    <View style={styles.container1}>
      <View style={{ zIndex: 4 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Age</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={ageOpen}
            value={ageValue}
            items={age}
            setOpen={setAgeOpen}
            setValue={setAgeValue}
            setItems={setAge}
            placeholder="Select Age"
            placeholderStyle={styles.placeholderStyles}
          />
        </View>
      </View>

      <View style={{ zIndex: 3 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Weight</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={weightOpen}
            value={weightValue}
            items={weight}
            setOpen={setWeightOpen}
            setValue={setWeightValue}
            setItems={setWeight}
            placeholder="Select Weight "
            placeholderStyle={styles.placeholderStyles}
          />
        </View>
      </View>

      <View style={{ zIndex: 2 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Blood Group</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={bloodOpen}
            value={bloodValue}
            items={blood}
            setOpen={setBloodOpen}
            setValue={setBloodValue}
            setItems={setBlood}
            placeholder="Select Blood Group "
            placeholderStyle={styles.placeholderStyles}
            maxHeight={100}
          />
        </View>
      </View>

      <View style={{ zIndex: 1 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Hemoglobin Level</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={hemoglobinOpen}
            value={hemoglobinValue}
            items={hemoglobin}
            setOpen={setHemoglobinOpen}
            setValue={setHemoglobinValue}
            setItems={setHemoglobin}
            placeholder="Select Hemoglobin Level "
            placeholderStyle={styles.placeholderStyles}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.RegisterBtn}
      onPress={DonorReg}
      >
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
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

export default BlooddetailScreen;

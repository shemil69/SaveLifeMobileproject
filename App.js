import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import CallFunction from './assets/src/callFunction/index.js'
import { Marker } from 'react-native-maps';  

    
    
function LoginScreen({ navigation }) {
  const[email,setUserName]= useState("");
  const[password,setPassword]= useState("");
  return (
    <View style={styles.container3}>
    <View><Text style={styles.TextHead}>SAVE LIFE BLOOD BANK</Text></View>
    <View style={styles.content}>
<Image style={styles.image} source={require("./blood-bank.webp")} />
  
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


  <Button
        title="Login"
        onPress={() => navigation.push('Category')}
      />
    <View style={styles.fixToTxt}>  
  <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('Forgot Password')}
      />

<Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
      />   
<Button
        title="CallFun"
        onPress={() => navigation.navigate('CallFunc')}
      />     
</View>

 </View>
 </View>
  );
};


function PasswordScreen({ navigation }) {
  const[NewPassword,setNewPassword]= useState("");
  const[Confirmpassword,setConfirmpassword]= useState("");
  return (
    <View style={styles.container3}>
    <View style={styles.content}>
    <Image style={styles.logo} source={require("./image4.png")} />
    
    <Text style={styles.label2}>New Password</Text>
         <TextInput
            style={styles.input}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
          onChangeText={(NewPassword) => setNewPassword(NewPassword)}
      />
        
        <Text style={styles.label2}>Confirm Password</Text>
         <TextInput
            style={styles.input}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
          onChangeText={(Confirmpassword) => setConfirmpassword(Confirmpassword)}
      />
    
    <View>
      <TouchableOpacity style={styles.RegisterBtn}>
      <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
      </View>

    
    </View>
    </View>
    );
    }

function RegisterScreen({ navigation }) {
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
  const[username,setUsername]= useState("");
  const[password,setPassword]= useState("");
  const[confirmpassword,setConfirmpassword]= useState("")

  return (
    <View style={styles.container3}>
    <View><Text style={styles.TextHead}>REGISTER BLOOD BANK</Text></View>
    <View style={styles.content}>
    <View style={{zIndex: 2}}>
    <View style= {styles.dropdownAge}>
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
                />
                </View> 
                </View>

                <View style={{zIndex: 1}}>
            <View style= {styles.dropdownAge}>
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
                />
              </View>
              </View>
              
        
         <Text style={styles.label2}>User Name</Text>
        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(Username) => setUsername(Username)}
      />

        <Text style={styles.label2}>Password</Text>
         <TextInput
            style={styles.input}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
            onChangeText={(Password) => setPassword(Password)}
            
          /> 
        
        <Text style={styles.label2}>Confirm Password</Text>
         <TextInput
            style={styles.input}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
            onChangeText={(Confirmpassword) => setConfirmpassword(Confirmpassword)}
            
          /> 
       </View>

       <View>
      <TouchableOpacity style={styles.RegisterBtn}>
      <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
      </View>
      </View>       
    
  );
}

function CategoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.fixToText}>
    <Button
        title="Add Donor"
        onPress={() => navigation.push('Donor Profile')}
      />
    <Button
        title="Find Donor"
        onPress={() => navigation.push('Find Donor')}
      />
      </View>
      <View>
      <Image style={styles.img} source={require("./image1.png")} />
      <Image style={styles.img} source={require("./image2.png")} />
      <Image style={styles.img} source={require("./image3.png")} />
      </View>
     <View>   
    <Text style={styles.TextBody}>100% of Sri Lankan blood donors are voluntory non rermunerated donors.</Text>
    <Text style={styles.TextBody}>Your precious donation of blood can save as many as 3 lives.</Text>
    <Text style={styles.TextBody}>You can donate blood in every 4 months time.</Text>
    </View>

    
    </View>
  );
}

function AdddonorScreen({ navigation }) {
  const[name,setName]= useState("");
  const[birth,setBirth]= useState("");
  const[address,setAddress]= useState("")
  const[id,setId]= useState("");
  const[number1,setNumber1]= useState("")
  const[number2,setNumber2]= useState("")
  const[donation,setDonation]= useState("")
  return (
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
        onPress={() => navigation.navigate('Donor Blood Detail')}
      />
    </View>
    );
  }

  function BlooddetailScreen({ navigation }) {
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
    
    return (
      <View style={styles.container1}> 
      <View style={{zIndex: 4}}>
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

          <View style={{zIndex: 3}}>    
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

          <View style={{zIndex: 2}}>   
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
            />
          </View>
          </View>

          <View style={{zIndex: 1}}>   
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
          

      <TouchableOpacity style={styles.RegisterBtn}>
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
      </View>
    
      );
    }   

function FinddonorScreen({ navigation }) {
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
    const [locationOpen, setLocationOpen] = useState(false);
    const [locationValue, setLocationValue] = useState(null);
    const [location, setLocation] = useState([
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
    return (
      <View style={styles.container2}> 
      <View style={{zIndex: 2}}>
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
            />
          </View>
          </View>

          <View style={{zIndex: 1}}>
          <View style={styles.dropdownAge}>
          <Text style={styles.label}>Location</Text>
           <DropDownPicker
              style={styles.dropdown}
              open={locationOpen}
              value={locationValue} 
              items={location}
              setOpen={setLocationOpen}
              setValue={setLocationValue}
              setItems={setLocation}
              placeholder="Select Location "
              placeholderStyle={styles.placeholderStyles}
            />
          </View>
          </View> 
           
          <Button
        title="FIND DONOR"
        onPress={() => navigation.navigate('Donor Location')}
      />
        
    </View>   
          
      );
    }   
    
    function DonorlocationScreen({ navigation }) {
      return (
        <View style={styles.container2}>
        <MapView  
          style={styles.map}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 7.00,   
            longitude:  81.00,  
              
          }}>  
  
          
        </MapView> 
          </View>
         );
        }   
    function DetailsScreen({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Details')}
          />
        </View>
      );
    }
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegisterScreen} />
        <Stack.Screen name="Forgot Password" component={PasswordScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Donor Profile" component={AdddonorScreen} />
        <Stack.Screen name="Donor Blood Detail" component={BlooddetailScreen} />
        <Stack.Screen name="Find Donor" component={FinddonorScreen} />
        <Stack.Screen name="Donor Location" component={DonorlocationScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name ="CallFunc" component={CallFunction}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'-50%',
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'-120%',
  },
  
  container3: {
    flex: 1,
    width: "100%",
    marginTop:'0%',
    backgroundColor: '#fff',
    
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
  content:{
  width:"90%",
  marginTop:'10%', 
  },
  content2:{
    width:"90%",
    marginTop:'0.5%', 
    },

  label2: {
    marginHorizontal: 10,
    marginBottom: 15,
    fontWeight:'bold',
   
  },

  text:{
    fontWeight:'bold',
    alignItems:'center',
    fontSize:20,
    marginTop:'-20%',
  },

  TextHead:{
    fontWeight:"bold",
    fontSize:20,
    textAlign:'center',
    marginTop:'1%',
    
  },
  
  image: {
    marginBottom: 30,
    width:200,
    height:200,
    marginHorizontal:"20%",
  },

  inputView:{
    backgroundColor: "#FFC0CB",
    borderRadius: 5,
    width: "70%",
    height:50,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height:50,
    flex:1,
    padding:10,
    marginLeft:20,
    fontWeight:"bold",
    borderColor: "#B7B7B7",
  },

   RegisterBtn: {
    width:"90%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    backgroundColor:"#FF1493",
    marginHorizontal:"2%",
   
    },
  
   fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:'-30%',
        
    },
    fixToTxt:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:'10%',
    },

    TextBody:{
      fontSize:12,
      textAlign:"justify",
      marginLeft:'0.99%',
      marginVertical:8,
      marginHorizontal:6,
      fontWeight:'bold',
      color:'red',
      
    },   
    logo: {
      marginBottom: 30,
      width:300,
      height:300,
      marginTop:'-20%',
      marginHorizontal:"10%",
    },

    img:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      width:100,
      height:100,
      marginTop:'5%',
      marginLeft:'-40%',
      
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
      fontWeight:'bold',
     
    },
    
    inputView1:{
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "70%",
      height:50,
      marginBottom: 20,
      alignItems: "center",
    },
      
      map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        
      },  
     
    
},);




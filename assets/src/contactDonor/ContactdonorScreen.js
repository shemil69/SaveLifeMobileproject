import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VirtualizedList,
  Button,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';  
import Communications from "react-native-communications";


const ContactdonorScreen = () => {
  const Phonenumber = "0701169644";
  const SmsText = "SMS for Blood donation request";
  const numberOfDonor = 4;
  const nameContanner = 'Donor Name here';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstContanner}>
        <View style={styles.firstDonorFindView}>
          <Text style={styles.textforAlert}>Alert</Text>

          <Text style={styles.numberOfDonor}>{numberOfDonor} Donor Found </Text>
        </View>

        {/* For view google map  */}
        <View style={styles.container}>
          <MapView 
                 style={styles.map}
                 showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude:6.9271,   
            longitude: 79.8612,  
            latitudeDelta:0.090,  
            longitudeDelta: 0.090,  
          }}>  
  
          <Marker  
            coordinate={{ latitude: 6.9044, longitude:79.8540 }}  
            title={"Bamplapitiya"}  
            
          />  
           
          <Marker  
            coordinate={{ latitude: 6.9270, longitude: 79.8640 }}  
            title={"Maradana"}  
          />  
            
            <Marker  
            coordinate={{ latitude: 6.9361, longitude: 79.8450 }}  
            title={"Fort"}  
          /> 
             
             <Marker  
            coordinate={{ latitude: 6.8976, longitude: 79.8815 }}  
            title={"Narahenpita"}  
          /> 

        </MapView>
        </View>
      </View>
      <View style={styles.callAndDonorContanner}>
        <View>
          <Text>{nameContanner}</Text>
        </View>
        {/* For make a phone call to donor contact number  */}
        <View style={styles.callFunctionContanner}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => Communications.phonecall(Phonenumber, true)}
          >
            <Text style={styles.buttonTextStyle}>Voice call</Text>
          </TouchableOpacity>
          {/* For make a phone call to donor contact number */}
          <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => Communications.text(Phonenumber, SmsText)}
          >
          <Text style={styles.buttonTextStyle}>Send a Text</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    padding: 10,
  },
  firstContanner: {
    flex: 2,
  },
  firstDonorFindView: {
    padding: 10,
    marginLeft: "3%",
    borderEndWidth: 12,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  textforAlert: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: "2%",
  },
  numberOfDonor: {
    fontSize: 20,
    marginLeft: "2%",
  },

  map: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },

  callAndDonorContanner:{
    flex:1,
    flexDirection:"row",
  },
  callFunctionContanner:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingLeft:5,
    height:30,
    margin:'5%',
  
  },
  buttonStyle: {
    
    padding: 5,
    backgroundColor: "#FF1493",
    
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    marginRight:'11%',
  
  },
});
export default ContactdonorScreen;

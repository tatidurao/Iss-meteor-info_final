import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet
  } from 'react-native';

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>
              <View style={styles.titleBar}>
               <Text style={styles.titleText}>App Rastreador EEI</Text>
              </View> 
                 <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("IssLocation")}> 
                <Text style={styles.routeText}>Localização</Text>
                <Text style={styles.bgDigit}>1</Text>
                <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("Meteors")}>  
                <Text style={styles.routeText}>Meteoros</Text>
                <Text style={styles.bgDigit}>2</Text>
                <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate ("Info")}>  
                <Text style={styles.routeText}>Informações</Text>
                <Text style={styles.bgDigit}>3</Text>
                <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}/>
              </TouchableOpacity>
            </ImageBackground>     
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
     // backgroundColor: "cyan"
  },
  droidSafeArea:{
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  backgroundImage:{
    flex:1,
    resizeMode: 'cover'
  },
  titleBar:{
    flex: 0.15,
    justifyContent: "center", //y
    alignItems: "center" //x
  },
  titleText:{
    fontSize:40,
    fontWeight: 'bold',
    color: 'white'
  }, 
  routeCard:{
    flex: 0.25,
    backgroundColor: "white",
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius: 30
  },
  routeText:{
    fontSize:35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft:30
  },
  bgDigit:{
    position: "absolute",
    color: "gray",
    bottom: -15,
    fontSize: 150,
    right: 15,
    zIndex: -1, //x,y,z profundidade
  }, 
  iconImage:{
    position: "absolute",
    height: 200,
    width:200,
    resizeMode: 'contain',
    right: 20,
    top: -70
  }
})
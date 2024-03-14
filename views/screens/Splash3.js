import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, Dimensions,Image,ImageBackground,TouchableOpacity} from 'react-native';
// import COLORS from '../../conts/colors';
// import Button from '../components/Buttons';
// import Input from '../components/Input';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from '../components/Loader';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {ScreenProp} from '../../conts/types';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const Splash3 = ({navigation}) => {
  
 
// React.useEffect(() => {
//   get_auth()
//  }, []);
  
//  async function get_auth(){
//  let data = await AsyncStorage.getItem('logged')
 
//  if(data == '1'){
// navigation.navigate('Click')
//  }else{
//   navigation.navigate('Login')
//  }
//  }
  return (
     <>
     <View style={{backgroundColor:"#0F5132",height:height*1,width:width*1}}>
     <ImageBackground
                            source={require("../../conts/images/splash3.jpeg")}
                            style={{ width:width*1, height:height*1,alignSelf:"center"}}
                        >

                          <View>
<Text style={{color:"#fff",fontSize:35,fontWeight:'bold',marginTop:490,marginLeft:30}}>Find the solution</Text>

<Text style={{color:"#fff",fontSize:35,fontWeight:'bold',marginTop:5,marginLeft:30}}>of your problem ..</Text>
<TouchableOpacity style={{width:100,height:45,backgroundColor:"#eeeeef",borderRadius:25,marginTop:20,marginLeft:235,opacity:0.5}}>
  <Text style={{fontSize:20,fontWeight:"bold",color:"#000",textAlign:"center",marginTop:5}}>Next</Text>
</TouchableOpacity>
</View>
</ImageBackground>
                        </View>



     </>
  );
};

export default Splash3;
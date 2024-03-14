import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, Dimensions,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import COLORS from '../../conts/colors';
// import Button from '../components/Buttons';
// import Input from '../components/Input';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from '../components/Loader';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {ScreenProp} from '../../conts/types';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const Splash = ({navigation}) => {
  
 
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
     <Image
                            source={require("../../conts/images/imageedit_4_3463842827.png")}
                            style={{ width:250, height: 310,alignSelf:"center",marginTop:height*0.15}}
                        />
                                                <Text style={{color:"#cce7c9" , fontSize:50 ,fontWeight:'bold',textAlign:"center",marginTop:height*0.08}}>Nature</Text>
                                                <Text style={{color:"#cce7c9" , fontSize:13 ,textAlign:"center",marginTop:height*0.02}}>Find the solution for </Text>
                                                <Text style={{color:"#cce7c9" , fontSize:13 ,textAlign:"center",marginTop:height*0.005}}> your problem in our application</Text>

                        </View>



     </>
  );
};

export default Splash;
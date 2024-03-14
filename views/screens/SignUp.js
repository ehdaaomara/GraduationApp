import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../conts/colors';
// import Button from '../components/Buttons';
// import Input from '../components/Input';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import {ScreenProp} from '../../conts/types';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SignUp = ({navigation}) => {
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
    <View style={{alignItems:"center"}}>
    <ScrollView>
      <View
        style={{width: width * 1, height: height * 1, alignItems: 'center',backgroundColor: COLORS.white}}
        // colors={[COLORS.green, '#fff']}
        // start={{x: 0.2, y: 0.2}}
        // end={{x: 1.5, y: 1.5}}
        >
         
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: COLORS.black,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Become a member!
        </Text>
        <Image
                source={require('../../conts/images/clideo_editor_328696064e6040cf8f9a4e808fc526e0-ezgif.com-gif-maker.gif')}
                style={{width:180,height:180}}
              />
        <View
          style={{width: width * 0.85, height: height * 0.4, marginTop: 20}}>
          <Text style={{marginLeft: 15, marginBottom: 5,color : COLORS.black}}>Your name :</Text>
          <View
            style={{
              width: width * 0.85,
              height: height * 0.06,
              backgroundColor : COLORS.textinput ,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                color: "#000"
              }}
              placeholder="Enter your name"
              placeholderTextColor= "#8f8f8f"

            />
            <View style={{marginTop: 9}}>
              <Icon
                name="user"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={COLORS.icon}
                size={20}
              />
            </View>
          </View>

          <Text style={{marginLeft: 15, marginBottom: 5, marginTop: 10,color : COLORS.black}}>
            Your email :
          </Text>
          <View
            style={{
              width: width * 0.85,
              height: height * 0.06,
              borderColor: '#fff',
              backgroundColor : COLORS.textinput ,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                color: "#000"

              }}
              placeholder="Enter your email"
              placeholderTextColor= "#8f8f8f"

            />
            <View style={{marginTop: 9}}>
              <MaterialCommunityIcons
                name="email"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={COLORS.icon}
                size={20}
              />
            </View>
          </View>

          <Text style={{marginLeft: 15, marginBottom: 5, marginTop: 10,color : COLORS.black}}>
            Password :
          </Text>
          <View
            style={{
              width: width * 0.85,
              height: height * 0.06,
              backgroundColor : COLORS.textinput ,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                color: "#000"

              }}
              placeholder="Enter your password"
              placeholderTextColor= "#8f8f8f"

            />
            <View style={{marginTop: 9}}>
              <Icon
                name="eye"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={COLORS.icon}
                size={20}
              />
            </View>
          </View>

          <Text style={{marginLeft: 15, marginBottom: 5, marginTop: 10,color : COLORS.black}}>
            Confirm password :
          </Text>
          <View
            style={{
              width: width * 0.85,
              height: height * 0.06,
              backgroundColor : COLORS.textinput ,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                color: "#000"

              }}
              placeholder="Rewrite password"
              placeholderTextColor= "#8f8f8f"

            />
            <View style={{marginTop: 9}}>
              <Icon
                name="eye"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={COLORS.icon}
                size={20}
              />
            </View>
          </View>

          <Text style={{textAlign: 'center', marginTop: 15,color : COLORS.grey}}>
            -------------------- OR --------------------
          </Text>

          <View
            style={{flexDirection: 'row', marginTop: 10, alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="facebook"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={'#4267B2'}
                size={39}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                borderRadius: 30,
                justifyContent: 'center',
                marginLeft: 30,
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="twitter"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={'#1DA1F2'}
                size={35}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                borderRadius: 30,
                justifyContent: 'center',
                marginLeft: 30,
                alignItems: 'center',
              }}>
              {/* <MaterialCommunityIcons
                name="instagram"
                //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
                color={'#d21a4b'}
                size={37}
              /> */}
              <Image
                source={require('../../conts/images/instagram-logo.png')}
                style={{width:29,height:29}}
              />
            </TouchableOpacity>
          </View>

         

        
        </View>

        {/* <ImageBackground
          source={require('../../conts/images/sign.png')}
          style={{
            width: width * 1,
            height: 310,
            alignSelf: 'center',
            marginTop: 70,
          }}> */}


 <TouchableOpacity
                // activeOpacity={0.9}
            style={{
              width: 105,
              height: 45,
              backgroundColor: COLORS.icon,
              borderRadius: 25,
              marginTop: 100,
              alignSelf: 'center',
              // opacity: 0.7,
              shadowColor: 'black',
              shadowOpacity: 2,
              elevation: 15,
              shadowRadius: 20,
              shadowOffset: {width: 50, height: 5},
            }}
            onPress={() =>
              navigation.navigate('Home')}

            >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.whitee,
                textAlign: 'center',
                marginTop: 5,
              }}>
              SignUp
            </Text>
          </TouchableOpacity>

            <View>
          <Text style={{ textAlign: 'center',marginTop:-5,color : COLORS.grey}}>
            Already have an acount?
            <TouchableOpacity
              style={{
                
                marginLeft: 5,
                height: 35,
                marginTop:10
              }}
              onPress={() =>
                navigation.navigate('Login')}>
              <Text style={{marginTop:17,color:"#3d49f2",textDecorationLine: 'underline'}}> log in</Text>
            </TouchableOpacity>
          </Text>
          </View>
        {/* </ImageBackground> */}
      </View>
      </ScrollView>

      </View>
    </>
  );
};

export default SignUp;

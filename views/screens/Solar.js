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
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Solar = () => {
  return (
    <View style={{backgroundColor: COLORS.white}}>
      {/* // <View> */}
      {/* <LinearGradient
        style={{width: width * 1, height: height * 1}}
        colors={[COLORS.green, '#fff']}
        start={{x: 0.2, y: 0.2}}
        end={{x: 1.5, y: 1.5}}> */}


        <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.icon,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          height: height * 0.09,
        }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
          color={'#fff'}
          size={25}
          style={{marginLeft: 20, marginTop: 20}}
        />

        <MaterialCommunityIcons
          name="bell-ring-outline"
          //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
          color={COLORS.whitee}
          size={23}
          style={{marginLeft: 220, marginTop: 20}}
        />

        <Entypo
          name="dots-three-vertical"
          //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
          color={'#fff'}
          size={20}
          style={{marginLeft: 14, marginTop: 20}}
        />
      </View>


      <View
        style={{
          width: width * 0.6,
          height: height * 0.06,
          borderRadius: 20,
          borderColor: COLORS.whitee,
          backgroundColor: COLORS.whitee,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: -15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 7,
            color: COLORS.black,
          }}>
          Solar Production
        </Text>
      </View>

        <View
          style={{
            height: 600,
            width: width * 0.95,
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View
              style={{
                width: width * 0.52,
                height: height * 0.055,
                borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 1,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 19,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 6,
                }}>
                Solar Eneregy
              </Text>
            </View> */}

            <View
              style={{
                width: width * 0.9,
                height: height * 0.22,
                alignSelf: 'center',
                marginTop: 14,
                // backgroundColor:'#fff'
              }}>
              <Text style={{fontSize: 15, textAlign: 'center', color : "#000"}}>
              this sector deals with complex relationship between weather conditions and renewable energy generation. With hourly measurements of key weather parameters such as solar radiation, temperature, humidity, and precipitation, this dataset allows researchers and analysts to explore the impact of weather on energy consumption and production.
              </Text>
            </View>

           

           

            <View
        style={{
          width: width * 0.6,
          height: height * 0.06,
          borderRadius: 20,
          borderColor: COLORS.whitee,
          backgroundColor: COLORS.whitee,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: -15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 7,
            color: COLORS.black,
          }}>
           Upload Image
        </Text>
      </View>

            <Image
              source={require('../../conts/images/default.jpg')}
              style={{
                width: width * 0.8,
                height: 210,
                alignSelf: 'center',
                marginTop: 19,
              }}
            />

            <TouchableOpacity
              style={{
                width: 85,
                height: 30,
                backgroundColor: COLORS.icon,
                borderRadius: 29,
                marginTop: 10,
                marginLeft: 25,
                shadowColor: 'black',
                shadowOpacity: 0.1,
                elevation: 10,
                shadowRadius: 20,
                shadowOffset: {width: 50, height: 2},
                marginTop: 15,
              }}>
              <Text style={{textAlign: 'center', fontSize: 15, marginTop: 2 , color : "#ffff"}}>
                Upload
              </Text>
            </TouchableOpacity>

            <View
        style={{
          width: width * 0.6,
          height: height * 0.06,
          borderRadius: 20,
          borderColor: COLORS.whitee,
          backgroundColor: COLORS.whitee,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 7,
            color: COLORS.black,
          }}>
          The Result
        </Text>
      </View>

            <Image
              source={require('../../conts/images/default.jpg')}
              style={{
                width: width * 0.8,
                height: 210,
                alignSelf: 'center',
                marginTop: 19,
                marginBottom:15
              }}
            />
          </ScrollView>
        </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Solar;

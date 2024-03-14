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

const Water = () => {
  return (
    <View style={{backgroundColor: COLORS.white , width : width*1 , height : height*1}}>
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
          width: width * 0.75,
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
          Water quality prediction 
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
              height: height * 0.26,
              alignSelf: 'center',
              marginTop: 14,
              // backgroundColor:'#fff'
            }}>
            <Text style={{fontSize: 15, textAlign: 'center', color: '#000'}}>
            The model aims to predict the potability of water based on various water quality metrics, including pH value, hardness, total dissolved solids (TDS), chloramines, sulfate concentration, conductivity, organic carbon, trihalomethanes (THMs), and turbidity. These metrics are essential for evaluating water safety according to World Health Organization (WHO) standards. The target variable, potability, indicates whether the water is safe for human consumption (1 for Potable, 0 for Not potable).
            </Text>
          </View>


          <View
        style={{
          width: width * 0.5,
          height: height * 0.06,
          borderRadius: 20,
          borderColor: COLORS.whitee,
          backgroundColor: COLORS.whitee,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 10,
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
           Enter Your Data
        </Text>
      </View>

     
<View style={{flexDirection: "row"}}>
    <View>
          <Text style={{marginLeft: 20, marginBottom: 5, color: COLORS.black , marginTop: 15}}>PH of water :</Text>
      <View
            style={{
              width: width * 0.4,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:10
            }}>
            <TextInput
              style={{
                width: width * 0.4,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the PH"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>

          <View>
          <Text style={{marginLeft: 25, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The Hardness :</Text>
      <View
            style={{
              width: width * 0.45,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:15
            }}>
            <TextInput
              style={{
                width: width * 0.45,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the Hardness"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>
          
          </View>

<View style={{flexDirection: "row"}}>
    <View>
          <Text style={{marginLeft: 20, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The Solids :</Text>
      <View
            style={{
              width: width * 0.4,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:10
            }}>
            <TextInput
              style={{
                width: width * 0.4,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the Solids"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>

          <View>
          <Text style={{marginLeft: 25, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The country :</Text>
      <View
            style={{
              width: width * 0.45,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:15
            }}>
            <TextInput
              style={{
                width: width * 0.4,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the country"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>
          
          </View>



          <View style={{flexDirection: "row"}}>
    <View>
          <Text style={{marginLeft: 20, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The Trihalomethanes :</Text>
      <View
            style={{
              width: width * 0.4,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:10
            }}>
            <TextInput
              style={{
                width: width * 0.5,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the Trihal"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>

          <View>
          <Text style={{marginLeft: 25, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The Chloramines :</Text>
      <View
            style={{
              width: width * 0.45,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               marginLeft:15
            }}>
            <TextInput
              style={{
                width: width * 0.5,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              placeholder="Enter the Chloramines"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>
          
          </View>

          

          <View
        style={{
          width: width * 0.7,
          height: height * 0.06,
          borderRadius: 20,
          borderColor: COLORS.whitee,
          backgroundColor: COLORS.whitee,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
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

      <Text style={{marginLeft: 25, marginBottom: 20, color: COLORS.black , marginTop: 15}}>The water is suitable for agriculture :</Text>
        </ScrollView>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Water;

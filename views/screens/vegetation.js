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

const Vegetation = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        width: width * 1,
        height: height * 1,
      }}>
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
          Vegetation
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
              height: height * 0.24,
              alignSelf: 'center',
              marginTop: 14,
              // backgroundColor:'#fff'
            }}>
            <Text style={{fontSize: 15, textAlign: 'center', color: '#000'}}>
              This model uses data about soil and weather conditions like
              temperature, humidity, pH, and rainfall to help farmers decide
              which crops to grow. By analyzing factors like nitrogen,
              phosphorous, and potassium levels in the soil, it suggests the
              best crops for each farm. This helps farmers make smarter
              decisions, leading to better harvests and healthier crops. With
              this model, farmers can use data to improve their farming
              practices and get more out of their land.{' '}
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

          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 5,
                  color: COLORS.black,
                  marginTop: 15,
                }}>
                Temperature :
              </Text>
              <View
                style={{
                  width: width * 0.4,
                  height: height * 0.06,
                  borderColor: COLORS.black,
                  // borderWidth: 1,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: '#daefe5',
                  marginLeft: 10,
                }}>
                <TextInput
                  style={{
                    width: width * 0.4,
                    height: height * 0.06,
                    borderRadius: 20,
                    padding: 15,
                  }}
                  placeholder="Enter the temp"
                  placeholderTextColor="#8f8f8f"
                />
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 25,
                  marginBottom: 5,
                  color: COLORS.black,
                  marginTop: 15,
                }}>
                The Humidity :
              </Text>
              <View
                style={{
                  width: width * 0.45,
                  height: height * 0.06,
                  borderColor: COLORS.black,
                  // borderWidth: 1,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: '#daefe5',
                  marginLeft: 15,
                }}>
                <TextInput
                  style={{
                    width: width * 0.45,
                    height: height * 0.06,
                    borderRadius: 20,
                    padding: 15,
                  }}
                  placeholder="Enter the humidity"
                  placeholderTextColor="#8f8f8f"
                />
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 5,
                  color: COLORS.black,
                  marginTop: 15,
                }}>
                The PH of water :
              </Text>
              <View
                style={{
                  width: width * 0.4,
                  height: height * 0.06,
                  borderColor: COLORS.black,
                  // borderWidth: 1,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: '#daefe5',
                  marginLeft: 10,
                }}>
                <TextInput
                  style={{
                    width: width * 0.4,
                    height: height * 0.06,
                    borderRadius: 20,
                    padding: 15,
                  }}
                  placeholder="Enter the PH"
                  placeholderTextColor="#8f8f8f"
                />
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 25,
                  marginBottom: 5,
                  color: COLORS.black,
                  marginTop: 15,
                }}>
                The rainfall :
              </Text>
              <View
                style={{
                  width: width * 0.45,
                  height: height * 0.06,
                  borderColor: COLORS.black,
                  // borderWidth: 1,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: '#daefe5',
                  marginLeft: 15,
                }}>
                <TextInput
                  style={{
                    width: width * 0.4,
                    height: height * 0.06,
                    borderRadius: 20,
                    padding: 15,
                  }}
                  placeholder="Enter the rainfall"
                  placeholderTextColor="#8f8f8f"
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
              marginBottom:20,
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

          {/* <Text
            style={{
              marginLeft: 25,
              marginBottom: 20,
              color: COLORS.black,
              marginTop: 15,
            }}>
            The water is suitable for agriculture :
          </Text> */}
        </ScrollView>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Vegetation;

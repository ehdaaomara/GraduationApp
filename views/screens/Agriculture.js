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

const Agriculture = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F5F4F6'}}>
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
          width: width * 0.45,
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
          Agriculture
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
          <Text
            style={{
              marginLeft: 25,
              fontSize: 15,
              marginTop: 10,
              color: COLORS.greyplace,
            }}>
            General :
          </Text>

          <View>
            <TouchableOpacity
              style={{
                height: height * 0.15,
                width: width * 0.9,
                backgroundColor: '#ffff',
                alignSelf: 'center',
                borderRadius: 20,
                flexDirection: 'row',
                shadowColor: '#000',
                marginTop: height * 0.01,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}
              // onPress={() => {
              //     this.props.navigation.navigate("page_23")
              //     // this.sendData()
              // }}
            >
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../conts/images/logo.png')}
                  style={{
                    width: 105,
                    height: 105,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                />
                <View
                  style={{padding: 20, width: width * 0.7, marginLeft: -30}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    What do you know about forest and agriculture?{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    What are its sources?
                  </Text>
                  
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginLeft: 25,
              fontSize: 15,
              marginTop: 10,
              color: COLORS.greyplace,
            }}>
            Our models :
          </Text>

          <View>
            <TouchableOpacity
              style={{
                height: height * 0.2,
                width: width * 0.9,
                backgroundColor: '#ffff',
                alignSelf: 'center',
                borderRadius: 20,
                flexDirection: "row",
                shadowColor: '#000',
                marginTop: height * 0.018,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}
              onPress={() =>
                navigation.navigate('Water')}
            >
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../../conts/images/water-pollution-6276263-5191829.webp')}
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 35,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    padding: 10,
                    marginTop: 2,
                    width: width * 0.6,
                    marginLeft: 2,
                  }}>
                 
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    water quality prediction
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      marginTop: 3,
                      textAlign: 'center',
                      marginLeft: -5,
                    }}>
                    Use Machine learning model shows whether the water is suitable for agriculture and the percentage of substances that make up the water.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                height: height * 0.23,
                width: width * 0.9,
                backgroundColor: '#ffff',
                alignSelf: 'center',
                borderRadius: 20,
                flexDirection: "row",
                shadowColor: '#000',
                marginTop: height * 0.018,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}
              onPress={() =>
                navigation.navigate('Vegetation')}
            >
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../../conts/images/plant-png-barter-new-sales-ims-barter-trade-exchange-network-33.png')}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: 35,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    padding: 10,
                    marginTop: 2,
                    width: width * 0.6,
                    marginLeft: -2,
                  }}>
                  
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Vegetation {' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      marginTop: 3,
                      textAlign: 'center',
                      marginLeft: -5,
                    }}>
Determine the soil suitable for growing any crops and the productivity rate of each crop By introducing soil components such a N,P,K temperature,humidity ,ph ,rainfall</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

         

         
          <View>
            <TouchableOpacity
              style={{
                height: height * 0.22,
                width: width * 0.9,
                backgroundColor: '#ffff',
                alignSelf: 'center',
                borderRadius: 20,
                flexDirection: "row",
                shadowColor: '#000',
                marginBottom: 40,
                marginTop: height * 0.018,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}
              onPress={() =>
                navigation.navigate('Inflow')}
            >
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../../conts/images/transparent-waterfall-cartoon-mountain-waterfall-with-trees-and-pool65cb10a38d5b34.934438611707806883579.png')}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: 35,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    padding: 10,
                    marginTop: 2,
                    width: width * 0.6,
                    marginLeft: -2,
                  }}>
                  
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Predicting water inflow {' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      marginTop: 3,
                      textAlign: 'center',
                      marginLeft: -5,
                    }}>
It determines the water level, through which we know when to store water and how to use it for agriculture and to predict the occurrence of floods.
</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.23,
              backgroundColor: COLORS.touch,
              borderRadius: 25,
              alignSelf: 'center',
              // opacity: 0.7,
              shadowColor: 'black',
              shadowOpacity: 0.1,
              elevation: 20,
              shadowRadius: 20,
              shadowOffset: {width: 50, height: 5},
              marginTop: 10,
              // opacity:0.4
            }}>
            <View style={{padding: 20, flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 'bold',
                    opacity: 1,
                  }}>
                  Wind Eneregy{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#242824',
                    fontWeight: 'bold',
                    width: 190,
                    marginTop: 5,
                  }}>
                  Wind energy, places to place windmills, and how to exploit
                  this energy. Think and read carefully to discover what is new
                </Text>
              </View>
              <Image
                source={require('../../conts/images/7294893.png')}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.25,
              backgroundColor: COLORS.touch,
              borderRadius: 25,
              alignSelf: 'center',
              // opacity: 0.7,
              shadowColor: 'black',
              shadowOpacity: 0.1,
              elevation: 20,
              shadowRadius: 20,
              shadowOffset: {width: 50, height: 5},
              marginTop: 15,
              // opacity:0.4
            }}>
            <View style={{padding: 20, flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 'bold',
                    opacity: 1,
                  }}>
                  Solar Eneregy{' '}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    color: '#242824',
                    fontWeight: 'bold',
                    width: 190,
                    marginTop: 5,
                  }}>
                  Solar energy and how to benefit from it throughout the day and
                  the role of Egypt and the world. Come with us and explore
                  everything that is exciting.
                </Text>
              </View>
              <Image
                source={require('../../conts/images/4091074.png')}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 15,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.25,
              backgroundColor: COLORS.touch,
              borderRadius: 25,
              alignSelf: 'center',
              // opacity: 0.7,
              shadowColor: 'black',
              shadowOpacity: 0.1,
              elevation: 20,
              shadowRadius: 20,
              shadowOffset: {width: 50, height: 5},
              marginTop: 15,
              // opacity:0.4
              marginBottom: 15,
            }}>
            <View style={{padding: 20, flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 'bold',
                    opacity: 1,
                  }}>
                  Hydropower
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    color: '#242824',
                    fontWeight: 'bold',
                    width: 190,
                    marginTop: 5,
                  }}>
                  Hydropower is the energy of water flowing from top to bottom.
                  It can be generated from reservoirs and rivers. Come with us
                  and discover how we can benefit from this energy
                </Text>
              </View>
              <Image
                source={require('../../conts/images/3574296.png')}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 15,
                }}
              />
            </View>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Agriculture;

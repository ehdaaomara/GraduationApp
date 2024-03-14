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

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: "#F5F4F6"}}>
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
          height: height * 0.12,
        }}>
        <View style={{padding: 20}}>
          <Text
            style={{fontSize: 18, fontWeight: 'bold', color: COLORS.whitee}}>
            Welcome Back 👋{' '}
          </Text>
          <Text
            style={{fontSize: 12, fontWeight: 'bold', color: COLORS.whitee}}>
            Hey, Ehdaa
          </Text>
        </View>

        <MaterialCommunityIcons
          name="bell-ring-outline"
          //   style={{color: '#fff', fontSize: 22, marginRight: 20 }}
          color={COLORS.whitee}
          size={25}
          style={{marginLeft: 55, marginTop: 25}}
        />

        <Image
          source={require('../../conts/images/user.png')}
          style={{
            width: 43,
            height: 43,
            alignSelf: 'center',
            marginLeft: 15,
            marginTop: -15,
          }}
        />
      </View>
      <View style={{
                            height: height * 0.07,
                            width: width * 0.9,
                            backgroundColor: "#ffff",
                            alignSelf: "center",
                            borderRadius: 20,
                            marginTop: height * -0.023,
                            flexDirection: "row",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,

                            elevation: 9,

                        }}>

                            <Icon name='search' size={20} color={COLORS.icon}
                                style={{ padding: 15 }}

                            />

                            <TextInput style={{
                                height: height * 0.07,
                                width: width * 0.76,
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                color: "#2C3D8F",



                            }}
                                placeholder={" Search about category : "}
                                placeholderTextColor={"#8f8f8f"}
                            />
                        </View>

                     
      <View style={{height: 600, width: width * 0.95, alignSelf: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{marginLeft: 25, fontSize: 14, color: COLORS.greyplace , marginTop:5}}>
            General :
          </Text>

          <View>
            <TouchableOpacity
             style={{
              height: height * 0.16,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop:  height * 0.01,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
         
          >
              <View style={{flexDirection: 'row'}}>
              <Image
                  source={require('../../conts/images/gen.png')}
                  style={{
                    width: 96,
                    height: 96,
                    marginTop: 15,
                    marginLeft:5
                  }}
                />
                <View style={{padding: 20, marginTop: 6}}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold',marginTop:8,  textAlign:"center"}}>
                    Know more about our{' '}
                  </Text>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold', textAlign:"center"}}>
                    application and us.
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>


          
          <Text style={{marginLeft: 25, fontSize: 14, marginTop: 10 , color: COLORS.greyplace}}>
            Category :
          </Text>


          <View>
            <TouchableOpacity
             style={{
              height: height * 0.2,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop: height * 0.01,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          onPress={() =>
            navigation.navigate('Renewable')}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/5919815.png')}
                  style={{
                    width: 96,
                    height: 96,
                    marginTop: 23,
                    marginLeft:5
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.6 }}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center"}}>
                    Renewable Eneregy{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center"}}>
                    Do you know what renewable energy is? What are its sources?
                  Read and discover renewable energy like you've never seen it
                  before.
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
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop: height * 0.018,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          onPress={() =>
            navigation.navigate('Agriculture')}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/4664372.png')}
                  style={{
                    width: 96,
                    height: 96,
                    marginTop: 35,
                    marginLeft:10
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.635, marginLeft:-5 }}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center"}}>
                    Forestry and Agriculture{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center" , marginLeft:-5}}>
                    Egypt is considered an agricultural country due to the
                  agricultural lands and forests it possesses. Here are some
                  suggestions for developing them.
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>

         

          <View>
            <TouchableOpacity
             style={{
              height: height * 0.21,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop: height * 0.018,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          // onPress={() => {
          //     this.props.navigation.navigate("page_23")
          //     // this.sendData()
          // }}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/5493014.png')}
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 35,
                    marginLeft:10
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.62}}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center"}}>
                    Climate{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center" }}>
                    The climate is changing greatly due to global warming. Here is
                  how to benefit from climate fluctuations for the benefit of
                  our planet.
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>

        
          <View>
            <TouchableOpacity
             style={{
              height: height * 0.2,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop: height * 0.018,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          // onPress={() => {
          //     this.props.navigation.navigate("page_23")
          //     // this.sendData()
          // }}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/10897918.png')}
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 35,
                    marginLeft:15
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.6}}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center"}}>
                    Land Cover{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center" }}>
                    God has blessed us with diversity of land cover Here is some
                  information on how to benefit from this diversity
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>


           
          <View>
            <TouchableOpacity
             style={{
              height: height * 0.22,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginTop: height * 0.018,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          // onPress={() => {
          //     this.props.navigation.navigate("page_23")
          //     // this.sendData()
          // }}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/13558376.png')}
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 35,
                    marginLeft:15
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.6}}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center"}}>
                    Navigation{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center" }}>
                    Egypt is distinguished by its navigation and its distinct
                  strategic location, making it an excellent center for
                  navigation. Read and explore this for yourself
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>
          


   
          <View>
            <TouchableOpacity
             style={{
              height: height * 0.21,
              width: width * 0.9,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              shadowColor: "#000",
              marginBottom : height * 0.04,
              marginTop: height * 0.018,
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
          }}
          // onPress={() => {
          //     this.props.navigation.navigate("page_23")
          //     // this.sendData()
          // }}
          >
              <View style={{flexDirection: 'row' ,marginTop: 5}}>
              <Image
                  source={require('../../conts/images/10936554.png')}
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 40,
                    marginLeft:15
                  }}
                />
                <View style={{padding:10, marginTop:2 , width : width*0.6}}>
                  <Text
                    style={{fontSize: 19, color: '#000', fontWeight: 'bold' , textAlign:"center" , width: width*0.65, marginLeft: -32}}>
                    Disaster Risk Management{' '}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#000',marginTop: 3 , textAlign:"center" , width: width*0.5}}>
                    The world is threatened by many dangers Here are some
                  solutions to avoid them and make the world safer place
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>
          </View>
         
         
        </ScrollView>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Home;

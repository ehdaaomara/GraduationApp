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
import axios from 'axios';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Visualization = () => {
  const [inputs, setInputs,] = React.useState({
    energy:"",
    country:"",
    year:"",
    precentage:""

  });
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  function upload_data() {
    let data = {
      user_energy: inputs.energy,
      user_country: inputs.country,
      user_year:inputs.year,
      user_percen: inputs.precentage
    
    };
//  console.log(data)
axios
.post(
     'https://fcikfs.000webhostapp.com/ProjectKfs/add_info.php', data
).then((res) => {

console.log(res.data)
    if (res.data.status == 'error') {
        Alert.alert("try agine later")
    }   else if (res.data.status == 'success') {
       
      // Alert.alert('saved data ... !')

      navigation.navigate('Done');
    }
})

}

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
          width: width * 0.55,
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
          Visualization 
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
              height: height * 0.33,
              alignSelf: 'center',
              marginTop: 14,
              // backgroundColor:'#fff'
            }}>
            <Text style={{fontSize: 15, textAlign: 'center', color: '#000'}}>
              This project introduces a visualization model depicting renewable
              energy production trends in Egypt over past years. Leveraging
              historical data on solar, wind, and hydroelectric energy
              generation, the model employs interactive graphs and maps to
              illustrate annual and seasonal variations. Users can explore the
              contributions of different renewable sources to Egypt's energy mix
              and identify trends over time. This visualization tool serves as a
              valuable resource for policymakers, researchers, and stakeholders
              in assessing Egypt's progress towards sustainable energy goals and
              identifying areas for future development.
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

      <Text style={{marginLeft: 57, marginBottom: 5, color: COLORS.black , marginTop: 15}}>Type of energy production :</Text>
      <View
            style={{
              width: width * 0.7,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               alignSelf:"center"
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              onChangeText={text => handleOnchange(text, 'energy')}
              placeholder="Enter the type of eneregy"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>

<View style={{flexDirection: "row"}}>
    <View>
          <Text style={{marginLeft: 20, marginBottom: 5, color: COLORS.black , marginTop: 15}}>The year :</Text>
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
              onChangeText={text => handleOnchange(text, 'year')}
              placeholder="Enter the year"
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
              onChangeText={text => handleOnchange(text, 'country')}

              placeholder="Enter the country"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>
          </View>
          
          </View>


          <Text style={{marginLeft: 57, marginBottom: 5, color: COLORS.black , marginTop: 15}}>Percentage of production :</Text>
      <View
            style={{
              width: width * 0.7,
              height: height * 0.06,
              borderColor: COLORS.black,
              // borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              backgroundColor:"#daefe5",
               alignSelf:"center"
            }}>
            <TextInput
              style={{
                width: width * 0.75,
                height: height * 0.06,
                borderRadius: 20,
                padding: 15,
                 
              }}
              onChangeText={text => handleOnchange(text, 'precentage')}
              placeholder="Enter the percentage"
              placeholderTextColor= "#8f8f8f"

            />
            
          </View>

<TouchableOpacity>
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
        }}
        onPress={upload_data} 
        >
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
      </TouchableOpacity>

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

export default Visualization;

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

const Datarenew = () => {
  return (
    <View style={{backgroundColor: '#F5F4F6', width : width*1, height : height*1}}>
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
          height: height * 0.078,
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
            height: 600,
            width: width * 0.95,
            alignSelf: 'center',
            marginTop: 5,
          }}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Text
              style={{
                fontSize: 19,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 39+0,
                color : COLORS.black,
                width: width*0.85,
                alignSelf:"center"
              }}>
              What do you know about renewable energy? what are it's sources?
              How to use it?
            </Text>

            <View style={{width:width*0.9,height:height*0.65,alignSelf:"center",marginTop:19}}>
              <Text style={{fontSize:16,textAlign:"center", color : COLORS.black}}>
                Renewable energy has brought significant benefits to the world.
                It has helped reduce greenhouse gas emissions, combat climate
                change, and decrease dependence on finite fossil fuels.
                Additionally, it has created new job opportunities, improved air
                quality, and enhanced energy security.
                Moving on to Egypt's vision for the year 2020, the country aimed to ramp
 up its renewable energy capacity.The goal was to generate 20% 
of the country's electricity from renewable sources by 2020. Egypt 
focused on the development of solar and wind power projects, attracting 
investments and implementing favorable policies to achieve this target. 
The vision aimed to enhance Egypt's energy independence, promote 
sustainability, and diversify its energy mix.


              </Text>
            </View>
          {/* </ScrollView> */}
        </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Datarenew;

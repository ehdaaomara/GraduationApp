import React from 'react';
import {View, Text, TextInput, StyleSheet,Dimensions} from 'react-native';
// import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20,borderRadius:20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? "#000"
              : isFocused
              ? "#ed0808"
              : "#fff",
            alignItems: 'center',
            borderRadius:20
          },
        ]}>
         <Icon
          name={iconName}
          style={{color: "#082aed", fontSize: 22, marginRight: 10}}
        />


        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: "#000", flex: 1}}
          {...props}
        />

{password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye" : "eye-slash"}
            style={{color: "#082aed", fontSize: 20}}

          />
        )}
       
      </View>
      {error && (
        <Text style={{marginTop: 7, color: "#ed0808", fontSize: 12,marginHorizontal:10}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    marginHorizontal:10,
    fontSize: 14,
    color: "#000",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#fff",
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
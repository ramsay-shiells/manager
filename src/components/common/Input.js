//import libraries for making component
import React from 'react';
import { View, Text, TextInput } from 'react-native';

//make the component
const Input = ({ label, value, onChangeText, placeholder, autoCorrect, secureTextEntry }) => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

//make the component available to the app
export { Input };

//import libraries for making component
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//make the component
const Spinner = ({ size }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

//make the component available to the app
export { Spinner };

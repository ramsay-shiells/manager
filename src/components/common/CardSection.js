//import libraries for making component
import React from 'react';
import { View } from 'react-native';

//make the component
//pass style as prop and merge/overwrite existing style
const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

//make the component available to the app
export { CardSection };

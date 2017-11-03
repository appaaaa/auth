// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, heigth: 10 },
    shadowOpacity: 0.2,
    elevation: 2, 
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component avilable to other parts of the app
export default Header;


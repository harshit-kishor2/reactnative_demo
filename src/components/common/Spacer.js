import React from 'react';
import { StyleSheet, View } from 'react-native';

const Spacer = ({ style, height = 5 }) => {
  return <View style={[styles.wrapper, { height: height }, style]} />;
};

export default Spacer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
});

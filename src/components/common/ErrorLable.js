import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorLabel = ({ msg }) => {
  return <Text style={styles.text}>{msg}</Text>;
};

export default ErrorLabel;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    paddingTop: 5,
    alignSelf: 'baseline',
    marginHorizontal: 10,
  },
});

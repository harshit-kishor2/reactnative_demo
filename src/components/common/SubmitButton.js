import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const SubmitButton = props => {
  const { label = 'Enter', style = {}, textStyle = {}, onPress } = props;

  return props.disabled ? (
    <TouchableOpacity disabled style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075D41',
    borderRadius: 50,
    alignSelf: 'center',
  },

  text: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },
});

export default SubmitButton;

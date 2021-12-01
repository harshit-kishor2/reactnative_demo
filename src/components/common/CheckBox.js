import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({ value, children, label, style, ...props }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <CheckBox value={value} type={'checkbox'} {...props} />
      <Text>{label}</Text>
    </View>
  );
};

export default Checkbox;
const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center' },
});

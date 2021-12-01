import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const Container = ({ style, children }) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = ({ size = 'small' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

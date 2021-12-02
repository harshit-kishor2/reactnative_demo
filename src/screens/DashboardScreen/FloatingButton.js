import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../../components/common/Icons';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../constants';

const FloatingButton = () => {
  const navigation = useNavigation();
  const openCreateContact = () => {
    navigation.navigate(RouteName.CREATE_CONTACT);
  };
  return (
    <TouchableOpacity onPress={openCreateContact} style={styles.wrapper}>
      <Icons name="add" type="material" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 70,
    backgroundColor: 'orange',
    borderRadius: 100,
  },
});

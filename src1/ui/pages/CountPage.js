import React from 'react';
import {StyleSheet, Text, View, Pressable, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {countIncreaseAction} from '../../Redux/actions/countAction';

const CountPage = () => {
  const {count} = useSelector(state => state.countReducer);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(countIncreaseAction());
  };
  return (
    <View>
      <Text>Count {count}</Text>
      <Pressable onPress={increase}>
        <View style={{height: 30}}>
          <Text>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 10}}></View>
      <Button title="Decrese" onPress={increase} />
    </View>
  );
};

export default CountPage;

const styles = StyleSheet.create({});

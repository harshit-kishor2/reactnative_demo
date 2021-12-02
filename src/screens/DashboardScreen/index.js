import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Icons, Loader } from '../../components';
import { contactListAction } from '../../redux/contact.slice';
import DashboardCompnent from './DashboardCompnent';
import FloatingButton from './FloatingButton';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { setOptions, toggleDrawer } = useNavigation();
  const [listData, setlistData] = useState(contactList);
  const { contactLoadingStatus, contactList } = useSelector(
    state => state.contactReducer,
  );

  useEffect(() => {
    dispatch(contactListAction());
  }, [dispatch, isFocused]);

  useEffect(() => {
    setlistData(contactList);
  }, [contactList]);

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <Icons
          onPress={() => {
            toggleDrawer();
          }}
          type="material"
          style={{ paddingRight: 10 }}
          size={30}
          name="menu"
        />
      ),
    });
  }, [setOptions, toggleDrawer]);

  return (
    <Container>
      {contactLoadingStatus === 'loading' ? (
        <Loader size="large" />
      ) : (
        <View style={{ flex: 1 }}>
          <DashboardCompnent listData={listData} />
          <FloatingButton />
        </View>
      )}
    </Container>
  );
};

export default DashboardScreen;

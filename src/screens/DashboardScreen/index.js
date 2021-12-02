import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Icons } from '../../components';
import { contactListAction } from '../../redux/contact.slice';
import DashboardCompnent from './DashboardCompnent';
import { Loader } from '../../components';
import FloatingButton from './FloatingButton';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const dispatch = useDispatch();

  const { setOptions, toggleDrawer } = useNavigation();
  const [listData, setlistData] = useState([
    { id: 1, name: 'Harshit1' },
    { id: 2, name: 'Harshit2' },
    { id: 3, name: 'Harshit3' },
  ]);
  const { contactLoadingStatus, contactList } = useSelector(
    state => state.contactReducer,
  );

  useEffect(() => {
    dispatch(contactListAction());
  }, [dispatch]);

  /*   useEffect(() => {
    setlistData(contactList);
  }, [contactList]); */

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

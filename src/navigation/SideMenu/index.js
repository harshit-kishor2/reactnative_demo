import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icons } from '../../components';
import { ImageConst, RouteName } from '../../constants';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/auth.slice';
import Toast from 'react-native-simple-toast';

const SideMenu = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          dispatch(logoutAction()).then(res => {
            if (res.type === 'auth/loginAction/rejected') {
              Toast.show('Some Error Occured.');
            }
          });
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icons type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <Image
          height={70}
          width={70}
          source={ImageConst.LOGO}
          style={styles.logoImage}
        />

        <View style={{ paddingHorizontal: 30 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;

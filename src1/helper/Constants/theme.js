import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const Themes = {
  color: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    accent: '#4895ef',
    danger: '#f72585',
    success: '#4cc9f0',
    grey: '#adb5bd',
    white: '#ffffff',
  },
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  percentWidth: widthPercentageToDP,
  percentHeight: heightPercentageToDP,
};

export default Themes;

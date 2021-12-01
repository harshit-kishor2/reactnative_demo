import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardScrollView = ({ style, children }) => {
  return (
    <KeyboardAwareScrollView
      style={[style]}
      enableOnAndroid={false}
      enableResetScrollToCoords={false}
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollView;

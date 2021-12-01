import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ErrorLabel from './ErrorLable';

const TextField = ({
  onChangeText,
  onBlur,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  touch,
  refKey,
  name,
  placeholder,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error && touch) {
      return 'red';
    }
    if (focused) {
      return 'green';
    } else {
      return 'grey';
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? 'center' : 'baseline' },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          name={name}
          placeholder={placeholder}
          ref={refKey}
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={onBlur}
          keyboardAppearance="dark"
          {...props}
        />
      </View>

      {error && touch && <ErrorLabel msg={error} />}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },

  inputContainer: {
    marginHorizontal: 10,
  },

  textInput: {
    flex: 1,
    width: '100%',
  },
});

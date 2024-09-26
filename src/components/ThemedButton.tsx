import React from 'react';
import {Pressable, Text, StyleSheet, useColorScheme} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';
import {getFontFamily} from '@utils/fontFamily';

const ThemedButton = ({
  title,
  onPress,
  type = 'primary',
  ...rest
}: {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'accent';
}) => {
  const remainingProps = rest;
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: theme[type],
          borderColor: theme.textPrimary,
          borderWidth: 2,
          opacity: pressed ? 0.6 : 1,
        },
      ]}
      onPress={onPress}
      {...remainingProps}>
      <Text style={[styles.text, {color: theme.background}]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: getFontFamily('ROBOTO', 'bold'),
  },
});

export default ThemedButton;

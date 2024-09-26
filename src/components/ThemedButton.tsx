import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {getFontFamily} from '@utils/fontFamily';
import useTheme from 'src/hooks/useTheme';

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
  const theme = useTheme();

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: theme[type],
          borderColor: theme.textPrimary,
          borderWidth: StyleSheet.hairlineWidth,
          opacity: pressed ? 0.3 : 1,
          transform: [{scale: pressed ? 0.98 : 1}],
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

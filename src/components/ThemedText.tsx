import React from 'react';
import {Text, TextProps, useColorScheme} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const ThemedText: React.FC<TextProps> = props => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return <Text {...props} style={[props.style, {color: theme.textPrimary}]} />;
};

export default ThemedText;

import React from 'react';
import {Text, TextProps} from 'react-native';
import useTheme from 'src/hooks/useTheme';

const ThemedText: React.FC<TextProps> = props => {
  const theme = useTheme();

  return <Text {...props} style={[props.style, {color: theme.textPrimary}]} />;
};

export default ThemedText;

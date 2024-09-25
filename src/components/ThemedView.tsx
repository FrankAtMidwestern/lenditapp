import React from 'react';
import {View, ViewProps, useColorScheme} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const ThemedView: React.FC<ViewProps> = props => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[{backgroundColor: theme.background}, props.style]}>
      {props.children}
    </View>
  );
};

export default ThemedView;

import React from 'react';
import {View, ViewProps} from 'react-native';
import useTheme from 'src/hooks/useTheme';

const ThemedView: React.FC<ViewProps> = props => {
  const theme = useTheme();

  return (
    <View style={[{backgroundColor: theme.background}, props.style]}>
      {props.children}
    </View>
  );
};
export default ThemedView;

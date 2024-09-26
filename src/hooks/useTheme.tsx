import {useColorScheme} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const useTheme = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return theme;
};

export default useTheme;

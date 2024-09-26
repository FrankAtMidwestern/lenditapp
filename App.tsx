import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import NetworkListener from '@components/NetworkListener';
import lightTheme from './src/theme/light';
import darkTheme from './src/theme/dark';
import {isIOS} from '@utils/platformUtil';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import MainNavigator from '@navigation/index';

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
    },
  };
  const statusBarColor = isIOS() ? 'transparent' : theme.surface;
  changeNavigationBarColor(theme.background, true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={statusBarColor}
        />
        <NetworkListener />
        <NavigationContainer theme={navTheme}>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

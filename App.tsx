import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, Text, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {getFontFamily} from '@utils/fontFamily';
import NetworkListener from '@components/NetworkListener';
import ThemedView from '@components/ThemedView';
import lightTheme from './src/theme/light';
import darkTheme from './src/theme/dark';
import ThemedText from '@components/ThemedText';
import {isIOS} from '@utils/platformUtil';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import ThemedTextInput from '@components/ThemedTextInput';
import ThemedButton from '@components/ThemedButton';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <ThemedView>
      <ThemedText style={{fontFamily: getFontFamily('ROBOTO', 'medium')}}>
        App
      </ThemedText>
      <ThemedButton title="Press me" onPress={() => {}} />
      <ThemedButton title="Press me" onPress={() => {}} type="secondary" />
      <ThemedButton title="Press me" onPress={() => {}} type="accent" />
    </ThemedView>
  );
};

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
          <Stack.Navigator
            screenOptions={{
              headerTintColor: theme.primary,
              headerStyle: {
                backgroundColor: theme.surface,
              },
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

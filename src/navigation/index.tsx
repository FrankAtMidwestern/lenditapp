import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  completeOnboarding,
  selectOnboardingStatus,
} from '@redux/slices/onboardingSlice';
import OnboardingScreen from '@screens/OnboardingScreen';
import AppTabs from './AppTabs';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const onboardingCompleted = useSelector(selectOnboardingStatus);
  const dispatch = useDispatch();

  const OnboardingScreenComponent = () => {
    return (
      <OnboardingScreen onComplete={() => dispatch(completeOnboarding())} />
    );
  };

  if (onboardingCompleted) {
    return <AppTabs />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreenComponent} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

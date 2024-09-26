import ThemedButton from '@components/ThemedButton';
import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const OnboardingScreen = ({onComplete}: {onComplete: () => void}) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to LendItApp',
      description: 'Easily lend or borrow tools.',
    },
    {title: 'Track Borrowed Tools', description: 'Keep track of your rentals.'},
    {title: 'Set Reminders', description: 'Never miss a return date again.'},
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const renderStepDots = () => {
    return (
      <View style={styles.stepContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepDot,
              {
                backgroundColor:
                  step === index ? theme.primary : theme.textSecondary,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, {color: theme.textPrimary}]}>
        {steps[step].title}
      </Text>
      <Text style={[styles.description, {color: theme.textSecondary}]}>
        {steps[step].description}
      </Text>

      {renderStepDots()}

      <ThemedButton title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;

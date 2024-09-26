import React from 'react';
import {TextInput, StyleSheet, useColorScheme, Text, View} from 'react-native';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';
import {getFontFamily} from '@utils/fontFamily';

const ThemedTextInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  error,
  isFocused,
  ...rest
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  error?: string;
  isFocused?: boolean;
}) => {
  const remainingProps = rest;
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={styles.container}>
      {label ? (
        <Text style={[styles.label, {color: theme.textPrimary}]}>{label}</Text>
      ) : null}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.surface,
            color: theme.textPrimary,
            borderColor: theme.primary,
            borderWidth: isFocused ? 2 : 1,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.textSecondary}
        value={value}
        onChangeText={onChangeText}
        {...remainingProps}
      />
      {error ? (
        <Text style={[styles.error, {color: theme.error}]}>{error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 3,
    margin: 5,
  },
  label: {
    fontSize: 16,
    fontFamily: getFontFamily('ROBOTO', 'medium'),
    textTransform: 'capitalize',
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: getFontFamily('JETBRAINS_MONO', 'normal'),
  },
  error: {
    fontSize: 16,
    fontFamily: getFontFamily('ROBOTO', 'medium'),
    textTransform: 'capitalize',
  },
});

export default ThemedTextInput;

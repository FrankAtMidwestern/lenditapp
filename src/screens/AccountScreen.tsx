import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AccountScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const GoalsScreen = () => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Savings Goals</Text>
      <Text style={styles.placeholder}>List of goals and progress will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default GoalsScreen;

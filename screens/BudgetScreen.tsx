import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const BudgetScreen = () => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Budget Overview</Text>
      <Text style={styles.placeholder}>Budget details and charts will be displayed here.</Text>
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

export default BudgetScreen;

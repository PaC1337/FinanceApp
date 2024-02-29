import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const SpendingScreen = () => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Spending by Category</Text>
      <Text style={styles.placeholder}>Spending categories and analytics will be displayed here.</Text>
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

export default SpendingScreen;

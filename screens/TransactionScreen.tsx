import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const TransactionsScreen = () => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Latest Transactions</Text>
      <Text style={styles.placeholder}>A list of recent transactions will be displayed here.</Text>
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

export default TransactionsScreen;

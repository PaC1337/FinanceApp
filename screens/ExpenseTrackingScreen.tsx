import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeColors, ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const ExpenseTrackingScreen = ({ navigation }) => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Expense Tracking</Text>
      <Button
        title="Add New Expense"
        onPress={() => navigation.navigate('AddExpense')} // Replace 'AddExpense' with your actual route name
      />
      {/* Placeholder for expenses list */}
      <Text style={styles.placeholder}>List of Expenses will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: ThemeColors.blue,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ExpenseTrackingScreen;

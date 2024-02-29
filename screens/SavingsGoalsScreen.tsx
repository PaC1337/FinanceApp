import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeColors, ThemeStyles } from '../components/ThemeProvider'; // Import your theme styles

const SavingsGoalsScreen = ({ navigation }) => {
  return (
    <View style={ThemeStyles.screenContainer}>
      <Text style={ThemeStyles.header}>Savings Goals</Text>
      <Button
        title="Add New Goal"
        onPress={() => navigation.navigate('AddGoal')} // Replace 'AddGoal' with your actual route name
      />
      {/* Placeholder for savings goals list */}
      <Text style={styles.placeholder}>List of Savings Goals will be displayed here.</Text>
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

export default SavingsGoalsScreen;

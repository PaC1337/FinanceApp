import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SectionCard from '../components/SectionCard';
import GradientButton from '../components/GradientButton';
import { ThemeColors, ThemeStyles } from '../components/ThemeProvider';

const DashboardScreen = ({ navigation }) => {
  // Function to navigate to different parts of the app
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <LinearGradient colors={ThemeColors.gradient} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Dashboard</Text>
        
        {/* Budget Overview */}
        <SectionCard title="Budget Overview">
          {/* Content of the Budget Overview */}
          <GradientButton title="View Budget" onPress={() => navigateToScreen('Budget')} />
        </SectionCard>
        
        {/* Spending by Category */}
        <SectionCard title="Spending by Category">
          {/* Content of the Spending by Category */}
          <GradientButton title="View Spending" onPress={() => navigateToScreen('Spending')} />
        </SectionCard>
        
        {/* Other sections like Income, Expenses, etc. */}
        {/* ... */}

        {/* Savings Goals */}
        <SectionCard title="Savings Goals">
          {/* Content of the Savings Goals */}
          <GradientButton title="View Goals" onPress={() => navigateToScreen('Goals')} />
        </SectionCard>
        
        {/* Latest Transactions */}
        <SectionCard title="Latest Transactions">
          {/* Content of the Latest Transactions */}
          <GradientButton title="View Transactions" onPress={() => navigateToScreen('Transaction')} />
        </SectionCard>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    ...ThemeStyles.header,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DashboardScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens
import DashboardScreen from './screens/DashboardScreen';
import ExpenseTrackingScreen from './screens/ExpenseTrackingScreen';
import SavingsGoalsScreen from './screens/SavingsGoalsScreen';
import BudgetScreen from './screens/BudgetScreen';
import SpendingScreen from './screens/SpendingScreen';
import GoalsScreen from './screens/GoalsScreen';
import TransactionsScreen from './screens/TransactionScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Expenses') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Savings') {
              iconName = focused ? 'trending-up' : 'trending-up-outline';
            }

            // Return the Ionicon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Expenses" component={ExpenseTrackingScreen} />
        <Tab.Screen name="Savings" component={SavingsGoalsScreen} />
        <Tab.Screen name="Budget" component={BudgetScreen} />
        <Tab.Screen name="Spending" component={SpendingScreen} />
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

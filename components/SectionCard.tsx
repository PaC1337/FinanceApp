import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeStyles } from './ThemeProvider';

const SectionCard = ({ title, children }) => {
  return (
    <View style={ThemeStyles.sectionCard}>
      <Text style={ThemeStyles.header}>{title}</Text>
      {children}
    </View>
  );
};


export default SectionCard;

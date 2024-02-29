import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

const GradientButton = ({ title, onPress }) => {
    const tailwind = useTailwind();
  // Simulate a gradient by adjusting the opacity of the blue color
  const gradientStyles = Array.from({ length: 10 }, (_, i) => ({
    ...tailwind(`bg-blue-${900 - i * 100}`),
    opacity: (10 - i) * 0.1,
  }));

  return (
    <TouchableOpacity onPress={onPress} style={tailwind('rounded-lg')}>
      <View style={tailwind('h-12 justify-center items-center overflow-hidden rounded-lg')}>
        {gradientStyles.map((style, index) => (
          <View key={index} style={[tailwind('absolute inset-0'), style]} />
        ))}
        <Text style={tailwind('text-white text-lg font-bold')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GradientButton;

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress,buttonTitle,bodySyle,titleStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonBody,bodySyle]} onPress={onPress}>
      <Text style={[styles.buttonTitle,titleStyle]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonBody: {
        
        backgroundColor: '#6C8EBF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 20,
      },
});

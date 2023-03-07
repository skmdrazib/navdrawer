import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';

const RootNavigatior = () => {
  return (
    <NavigationContainer>
       <MainStack/>
    </NavigationContainer>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({})
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Home = ({navigation}:
  NativeStackScreenProps <MainStackParamList>) => {
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title= "Go to Details" 
        onPress={() => navigation.navigate ('Details',
        {title: 'Question Stdio'})
        }
        /> 
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({});
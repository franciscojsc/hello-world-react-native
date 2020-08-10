import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Image
        style={styles.avatar}
        source={{
          uri:
            'https://www.gravatar.com/avatar/405ac8b17609d976cf85971af1502666?s=200',
        }}
      ></Image>
      <Text>My name is Francisco Chaves</Text>
      <Text>GitHub: @franciscojsc</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 10,
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// functional component
export default function App() {
  return (
    // View acts a lot like divs in html
    <View style={styles.container}>
      {/* Text must be rendered within the text widget only */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello,World</Text>
      </View>
      {/* If i add a style into View it wont be inherited by the chidren */}
      {/* There is an exception with Text within Text , they seem to inherit */}
      <View style={styles.body}>
        <Text>Hiiiiiii</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// we create an object with key value pairs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'yellow',
    padding:30,
  },
  headerText:{
    fontWeight:'bold'
  },
  body:{
    backgroundColor:"orange",
    padding:40,
  }
});

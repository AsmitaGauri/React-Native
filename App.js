import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

// functional component
export default function App() {
  
 const [people,setPeople]=useState([
   {name:"A",key:1},
   {name:"B",key:2},
   {name:'C',key:3},
   {name:"D",key:4},
   {name:"B",key:5},
   {name:'C',key:6},
   {name:"D",key:7},
   {name:"B",key:8},
   {name:'C',key:9},
   {name:"D",key:10},
 ]);
  
  return (
    <View style={styles.container}>
      {/* Look whatever is inside scroll view ,user must be able to scroll */}
      <ScrollView>
      {
          people.map((item)=>{
            return(
                <View key={item.key}>
                  <Text style={styles.item}>{item.name}</Text>
                </View>
            )
          })
        }
      </ScrollView>
        
    </View>
  );
}

// we create an object with key value pairs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:10,
    paddingHorizontal:30
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    padding:20,
    marginTop:30,
    backgroundColor:'pink',
    fontSize:24
  }
});

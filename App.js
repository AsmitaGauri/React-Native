import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

// functional component
export default function App() {
  
 const [people,setPeople]=useState([
   {name:"A",id:1},
   {name:"B",id:2},
   {name:'C',id:3},
   {name:"D",id:4},
   {name:"B",id:5},
   {name:'C',id:6},
   {name:"D",id:7},
   {name:"B",id:8},
   {name:'C',id:9},
   {name:"D",id:10},
 ]);

 const pressHandler=(id)=>{
   console.log(id);
  // Since we are depending on our prev state its always preferred to use a function inside setpeople
  setPeople((prePeople)=>{
    return prePeople.filter((people)=>people.id!=id);
  });
 }
  
  return (
    <View style={styles.container}>
      

    {/* We need to delete that card over which we click on */}
      <FlatList
      numColumns={2}
      keyExtractor={(item)=> item.id}
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
      
        
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
    padding:30,
    marginTop:30,
    backgroundColor:'pink',
    fontSize:24,
    marginRight:10
  }
});

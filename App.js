import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import Header from './components/header'
import ToDoItem from './components/todoItem';
import AddToDo from './components/addToDo';
// functional component
export default function App() {
  
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }]);

  const pressHandler=(key)=>{
    setTodos(()=>{
      return todos.filter((item)=> item.key!=key);
    })
  };
  
  const addHandler=(text)=>{
    setTodos((prevTodos)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...prevTodos
        
      ]
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View style={styles.content}>
        <AddToDo addHandler={addHandler}/>
        <FlatList
        data={todos}
        renderItem={({item})=>(
          <ToDoItem item={item} pressHandler={pressHandler}/>
        )}
        />
      </View>

      
        
    </View>
  );
}

// we create an object with key value pairs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:30
  },
  content:{
    padding:20,
  }
});

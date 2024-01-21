import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const AddTask = ({onAddTask})=>{
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () =>{
    if(newTask.trim() !== ''){
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return(
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        placeholder=" Add task"
        value= {newTask}
        onChangeText={(text) => setNewTask(text)}
        keyboardType="default"
        returnKeyType="Added"/>

      <Button title="Add Task" onPress={handleAddTask}/>

    </View>

  );
};


const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
      backgroundColor: '#ffb3b3', //red
    },
    
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;
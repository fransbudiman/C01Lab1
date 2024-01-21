import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList= ({titles}) => {
    const [toDos, setToDos] = useState(titles.map((value)=> ({id:uuidv4, toDos: value})));


    const addToDo= (newTask) =>{
        const newToDo = {id:uuidv4(), toDos: newTask};
        setToDos((prevToDos)=> [...prevToDos, newToDo]);
    };


    const removeToDo= (id) =>{
        setToDos((prevToDos)=> prevToDos.filter((toDos)=>toDos.id!=id));
    };

    return(
        <View style={styles.universeContainer}>
            
            <ScrollView>
                <View style={styles.todoListContainer}>
                    {toDos.map((counter)=>(
                        <View key={counter.id}>
                            <View style={styles.outerContainer}>
                                <Text style={styles.todoItem}>{counter.toDos}</Text>
                                <View style={styles.buttonStyle}>
                                    <Button title="Remove"  onPress={()=>removeToDo(counter.id)}/>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View>           
                <AddTask onAddTask={addToDo}/>
            </View> 
            
        </View>
    );

    
}

ToDoList.defaultProps = {
    value:"",
};


const styles = StyleSheet.create({

    universeContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between', //so task entry appears on top and Add Task bar appears at the bottom
        backgroundColor: '#ccffcc', //Green
    },

    todoListContainer: {
      margin: 10, //so item is not too close to edge of container
      backgroundColor: '#ffffcc' //yellow
      
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      flexWrap: 'wrap',
      textAlign: 'left', //flexWrap and textAlign allow long entry to wrap down
      width: '100%', //so text box spans the entire screen length regardless of text length
      flexShrink: 1, //also needed for text wrapping (no idea why...)
      
    },
    outerContainer: {
        border: '2px solid',
        padding:'20px',
        borderRadius:'20px',
        width: 'auto',
        margin:'auto',
        flexDirection: 'row', // so remove button and task entry is side by side
        
    },
    buttonStyle: {
        alignSelf: 'center', //so button is located in the middle of the task entry
    },
});

export default ToDoList;
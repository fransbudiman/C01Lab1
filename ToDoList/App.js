import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';


export default function App() {
  
  return (
    
      <View style={styles.containerApp}>
        <Text >My To-Do List</Text>
        <ToDoList titles = {[]}/>
        <StatusBar style="auto" />
      </View>
    
  );

  
}

const styles = StyleSheet.create({
  containerApp: {
    paddingTop: 50, //this creates some space between content and the status bar
    flex: 1, //ensure the app covers the whole screen
    flexDirection: 'column',
    backgroundColor: '#fff', //white background

  },


});

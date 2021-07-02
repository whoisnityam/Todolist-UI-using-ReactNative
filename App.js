// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task'

export default function App() {

const [task, setTask]=useState();
const [taskItems, setTaskItems]=useState([]);

const handleAddTask= () =>{
  Keyboard.dismiss();
  setTaskItems([...taskItems,task])
  setTask(null);
}

const completeTask=(index)=>{
  let itemsCopy=[...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}

  return (
      <View style={styles.container}>
         <ScrollView contentContainerStyle={{
            flexGrow: 1
           }}
           keyboardShouldPersistTaps='handled'>



        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}> Today's Task </Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index}  onPress={()=>completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
              })
            }
              {/* <Task Text="FrontEnd with ReactNative"/>
              <Task Text="Backend with nodeJS"/>
              <Task Text="CRUD operations using API"/>
              <Task Text="MongoDB as Database"/>
              <Task Text="Fullstack website"/> */}
          </View>
        </View>
        </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding":"height"} style={styles.writetask}>
        <TextInput style={styles.textbox} placeholder={"Write a task"} placeholderTextColor="red" value={task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addwrapper}>
          <Text style={styles.add}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      

      </View>  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  tasksWrapper: { 
    paddingHorizontal: 20,
    paddingTop: 80
  },
  sectionTitle:{ color: '#FFFFFF',
    fontSize:24, 
    fontWeight: 'bold',
    // marginBottom: 20
  },
  textbox:{
    padding:15,
    color: "#FFFFFF",
    backgroundColor: "#55BCF6",
    width: "70%",
    height: 50,
    borderRadius: 60,
    marginLeft:20, 
    borderWidth:1,
    borderColor:"white"
  },
  // placeholder{
  //   color: "#ecf0f1"
  // },
  writetask:{
 
    height:40,
    width:"100%",
    bottom: 20,
    opacity:0.7,
    position: "absolute",
    flexDirection:"row",
    justifyContent:"space-around",
    // alignItems: "center"
  },
  addwrapper:{
    backgroundColor: "#808080",
    width: 50,
    height: 50,
    borderRadius:60,
    textAlign: "center",
    padding: 5,
    marginRight: 30,
    borderWidth:1,
    justifyContent: "center",
    alignItems: 'center',
    borderColor:"white",

  },
  add:{

     color: "red",
     fontSize: 30,



  },
  items:{
    marginTop: 30
  }

});

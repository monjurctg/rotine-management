import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import Datamodal from '../components/Datamodal';
import { allClass, days, subjects, teachers, times } from './utils/utils';
import DataModal2 from '../components/DataModal2';



const AddClass = () => {
  const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');
  const[tname,setTname]=useState("")
  const[time,setTime]=useState("")
  const[subject,setSubject]=useState("")
  const[classname,setClassName]=useState("")
  const[day,setday]=useState("")


  // Read operation - fetch the list of to-do items from Firebase on component load
  useEffect(() => {
    // const todoRef = firebase.database().ref('todos');
    // todoRef.on('value', (snapshot) => {
    //   const todos = snapshot.val();
    //   if (todos) {
    //     setTodos(Object.values(todos));
    //   }
    // });
  }, []);

  // Create operation - add a new to-do item to Firebase
  const addTodo = async() => {
    try {
      const docRef = await addDoc(collection(db, "rotine"), {
        subject,
        tname,day,time,classname,
      });
      // console.log("Document written with ID: ", docRef.id);
      setClassName("")
      setSubject("")
      setTime("")
      setday("")
      setTname("")
      alert("Class added")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  console.log(tname)

  return (
    <View style={{margin:10}}>
      
     {/* <Text>Select Teacher Name</Text> */}
     <DataModal2 title={"select Day"}selectData={day} setData={setday} data={days}/>
     <DataModal2 title={"select Time"}selectData={time} setData={setTime} data={times}/>
     <DataModal2 title={"select class"}selectData={classname} setData={setClassName} data={allClass}/>



     <Datamodal title={"select teacher name"}selectData={tname.name} setData={setTname} data={teachers}/>
     <Datamodal title={"select subject name"}selectData={subject.name} setData={setSubject} data={subjects}/>


      <Button title="Add Class" onPress={addTodo} />

      {todos.map((todo, index) => (
        <View key={index}>
          <Text>{todo.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default AddClass;
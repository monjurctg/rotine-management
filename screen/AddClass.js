import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { collection, addDoc,getDocs,query,where } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import Datamodal from '../components/Datamodal';
import { allClass, days, subjects, teachers, times ,} from './utils/utils';
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
  // const addTodo = async() => {
  //   try {
  //     const rotineRef = collection(db, 'rotine');
  //         const q = query(
  //           rotineRef,
  //           where('classname', '==', classname),
  //           where('day', '==',day),
  //         );
  //       const querySnapshot = await getDocs(q);
  //       console.log(querySnapshot)

  //     const docRef = await addDoc(collection(db, "rotine"), {
  //       subject,
  //       tname,day,time,classname,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     setClassName("")
  //     setSubject("")
  //     setTime("")
  //     setday("")
  //     setTname("")
  //     alert("Class added")
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };
  // console.log(tname)
  const addTodo = async() => {
    try {
      const rotineRef = collection(db, 'rotine');
      const q = query(
        rotineRef,
        where('classname', '==', classname),
        where('day', '==', day),
        where('time', '==', time),

      );
  
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        // If no matching documents were found, add a new document
        const docRef = await addDoc(collection(db, "rotine"), {
          subject,
          tname,
          day,
          time,
          classname,
        });
        console.log("Document written with ID: ", docRef.id);
        setClassName("");
        setSubject("");
        setTime("");
        setday("");
        setTname("");
        alert("Class added");
      } else {
        console.log("Matching documents found; not inserting.");
        alert(day + " have a class at "+time)
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  

  return (
    <ScrollView  style={{margin:10}}>
      
     {/* <Text>Select Teacher Name</Text> */}
    <View style={{justifyConten:"center",marginTop:30}}>

    <DataModal2 title={"select Day"}selectData={day} setData={setday} data={days}/>
     <DataModal2 title={"select Time"}selectData={time} setData={setTime} data={times}/>
     <DataModal2 title={"select class"}selectData={classname} setData={setClassName} data={allClass}/>
     <Datamodal title={"select teacher name"}selectData={tname.name} setData={setTname} data={teachers}/>
     <Datamodal title={"select subject name"}selectData={subject.name} setData={setSubject} data={subjects}/>
      <Button title="Add Class" onPress={addTodo} />
    </View>
     
    </ScrollView>
  );
};

export default AddClass;

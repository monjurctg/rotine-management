import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { allClass, days } from './utils/utils';
import { db } from '../firebase/firebase';
import { collection, addDoc,getDocs ,query,where,orderBy} from "firebase/firestore"; 
import { AntDesign } from '@expo/vector-icons';

const Filter = ({ navigation, route }) => {
    const { name } = route.params;
    const [day, setDay] = useState(days[new Date().getDay()])
    const [className, setClassName] = useState("1st")
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(false)


    // const filterData = async () => {
    //     const rotineRef = collection(db, "rotine");
    //     const q = query(
    //       roomsRef,
    //       limit(1000),
  
    //       where("participantsArray", "array-contains-any", [`${email}`])
    //     );
    //   };
      
    const filterData = async () => {
        // console.log("fdjfkj")
        try {
            setLoading(true)
          const rotineRef = collection(db, 'rotine');
          const q = query(
            rotineRef,
            where('tname.name', '==', name),
            where('classname', '==', className),
            where('day', '==', day),
          );
        const querySnapshot = await getDocs(q);
        //   console.log(querySnapshot[0])
        const roomsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), // Spread the document data into an object
          })); 
        //   console.log(roomsData,"fddfdkj");
        setData(roomsData)
        } catch (error) {
          console.error('Error getting documents: ', error);
        }
        finally{
            setLoading(false)
        }
      };
      

    useEffect(()=>{
        filterData()
    },[day,className])

    return (
        <ScrollView>
            <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, paddingBottom: 10 }}>Select day</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    days.map((d, i) => <TouchableOpacity onPress={() => setDay(d)} key={i} style={{ ...styles.day, backgroundColor: day == d ? "#99ccff" : "#fff", }}>
                        <Text style={{ color: day == d ? "#fff" : "#000" }}>{d}</Text>

                    </TouchableOpacity>)
                }
            </ScrollView>

            <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, paddingBottom: 10 }}>Select Class</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    allClass.map((c, i) => <TouchableOpacity onPress={() => setClassName(c)} key={i} style={{ ...styles.day, backgroundColor: className == c ? "#99ccff" : "#fff" }}>
                        <Text style={{ color: className == c ? "#fff" : "#000" }}>{c}</Text>

                    </TouchableOpacity>)
                }
            </ScrollView>

            <View style={styles.rotine_header}>
                <Text style={{color:"#000"}}>Class Time</Text>
            </View>
            {
                    loading && <Text style={{textAlign:"center"}}>Loading...</Text>
                }
            <View style={styles.rotine_container}>
                
            {
               !loading && data.map((d,i)=>{
                    console.log(d.subject.name)
                    return <View key={i} style={styles.rotine}>
                        <AntDesign name="clockcircleo" size={20} color="black" />
                        <Text>{d.time}</Text>
                        <Text style={{fontSize:18,fontWeight:"bold",}}>{d.subject.sn}</Text>
                    </View>
                })
            }
            {/* <View  style={styles.rotine}></View> */}
                
                

            </View>


        </ScrollView>
    )
}

export default Filter

const styles = StyleSheet.create({
    days: {
        flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"
    },
    day: {
        height: 50, width: 100, borderWidth: 1, justifyContent: "center", alignItems: "center", gap: 10, marginTop: 10, borderRadius: 10, borderColor: "#CCC",marginRight:10

    }
    ,
    rotine_header:{
        justifyContent:"center",alignItems:"center",marginTop:20,backgroundColor:"#b3d9ff",padding:13
    },
    rotine_container:{
        flexDirection:"row",flexWrap:"wrap",marginTop:10,alignSelf:"center",gap:10

    },
    rotine:{
        height:130,width:125 ,borderColor:"#ccc",borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10

    }
})
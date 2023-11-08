import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { teachers } from './utils/utils'



const Teachers = ({navigation}) => {

  return (
    <ScrollView style = {styles.container}>
      <StatusBar/>
      <Text style={{textAlign:"center",fontSize:20,backgroundColor:"#0059b3",padding:10,color:"#FFF"}}>Select Teacher</Text>
      <View style={styles.content}>
        <View style={styles.teachers}>
          {
            teachers.map((t,index)=>  <TouchableOpacity key={index} onPress= {()=>navigation.navigate("filter",{name:t?.name})} style={styles.teacher}>
            <Text style={{textAlign:"center",fontSize:16,color:"#99ccff",fontWeight:"500 "}}>{t.name}</Text>
          </TouchableOpacity>)
          }

        </View>
     

      </View>
    
    </ScrollView>
  )
}

export default Teachers

const styles = StyleSheet.create({
  container:{
  //  width:"100%"
backgroundColor:"#FFF",
  flex:1
  },
  content:{
    justifyContent:"center",backgroundColor:"#fff",marginTop:30
  },
  teachers:{
    flexDirection:"row",flexWrap:"wrap",
    marginTop:10,justifyContent:"center",gap:20,alignItems:'center'
  },
  teacher:{
    height:150,width:"45%",borderWidth:1,alignItems:"center",justifyContent:"center",borderColor:"#DDD",borderRadius:10

  }
})
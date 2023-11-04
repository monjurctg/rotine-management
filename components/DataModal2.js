import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const DataModal2 = ({ data, title, selectData,setData }) => {
    const[isShow,setIsShow]=useState(false)
    console.log(selectData)
    return (
        <View style={{marginVertical:10}}>
            <TouchableOpacity onPress={()=>setIsShow(!isShow)} style={{ borderWidth: 1, padding: 13, borderColor: "#CCC", borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Text>{selectData ? selectData : title}</Text>
                <AntDesign name="caretdown" size={18} color="black" />
            </TouchableOpacity>
           {
            isShow &&  <ScrollView style={{ padding:10,backgroundColor: "#DDD", borderRadius: 10, marginTop: 10 }}>
            {
                data.map((d, index) => {
                    return <View key={index}>
                        <TouchableOpacity onPress={()=>{
                            setData(d)
                            setIsShow(false)
                        }} style={{borderWidth:1,marginTop:10,justifyContent:"center",padding:10,borderColor:"darkblue",borderRadius:10}}>
                            <Text>{d}</Text>
                        </TouchableOpacity></View>
                })
            }
        </ScrollView>
           }
        </View>
    )
}

export default DataModal2

const styles = StyleSheet.create({})
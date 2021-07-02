import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task =(props) =>{

    return(
    <View  style= {styles.items} >
        <View  style= {styles.itemsleft}>
          <View style={styles.square}></View>  
        </View>
         <Text style= {styles.itemstext}> {props.Text}</Text>
         <View  style= {styles.itemsright}>

         </View>
    </View>
    )
}

const styles= StyleSheet.create({
    itemstext:{
        color:'#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 30,
        maxWidth:'80%'
    },
    items:{
        backgroundColor: '#808080',
        paddingHorizontal: 20,
        paddingVertical:5,
        marginBottom:5,
        marginTop:5,
        borderRadius:12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemsleft:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square:{
        // paddingVertical: 5,
        // paddingHorizontal: 30,
        width: 24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity:0.7,
        borderRadius: 5
    },
    itemsright:{
        width:16,
        height:16,
        borderRadius:8,
        borderColor: '#55BCF6',
        borderWidth:3
        // marginRight: 
    },
    
})

export default Task;
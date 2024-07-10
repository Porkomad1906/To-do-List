import React from "react"
import { StyleSheet, Dimensions } from "react-native"

const styles=StyleSheet.create({
    container:{
      width:'100%',
      padding:20,
      height:650,
    },
    title:{
      marginTop:10,
      fontSize:40,
      color:'darkcyan',
      textAlign:'center',
      textDecorationLine:'underline'
    },
    text:{
      fontSize:16,
      color:'darkcyan'
    },
    textEstado:{
      fontSize:16,
      color:'darkcyan',
      textDecorationLine:'line-through',
    },
    whiteText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold'
    },
    textInput:{
      paddingLeft:15,
      borderColor:'darkcyan',
      borderWidth:1,
      borderRadius:8,
      width:Dimensions.get('screen').width*0.6,
      justifyContent:'space-between'
    },
    inputContainer:{
      flexDirection:'row',
      marginTop:25,
      justifyContent:'space-between'
    },
    addButton:{
      backgroundColor:'darkcyan',
      justifyContent:'center',
      alignItems:'center',
      width:Dimensions.get('screen').width*0.25,
      borderRadius:8,
    },
    
    addButtonL:{
      backgroundColor:'darkcyan',
      justifyContent:'center',
      alignItems:'center',
      width:Dimensions.get('screen').width*0.25,
      borderRadius:8,
      padding:10
    },
    scrollContainer:{
      marginTop:25
    },
    itemContainer:{
      paddingVertical:25,
      borderBottomColor:'darkcyan',
      borderBottomWidth:1,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    removeButtom:{
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
      paddingHorizontal:15
    },
    vacio:{
      fontSize:30,
      justifyContent:'center',
      alignItems:'center',
      color:'darkcyan',
      fontWeight:'bold',
      marginVertical:'50%',
    },
    containerL: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleL: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
    })

    export default styles;
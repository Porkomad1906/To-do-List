import React,{useState, useEffect, Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import RenderItem from './RenderTask';

//flatlist necesita dos parametros un array de informacion y una funcion que renderiza la informacion

export interface Task{
  title:string,
  state:boolean,
  date:Date,
}

export const Main = () => {

//Funcion para almacenar en la memoria del dispositivo.
const guardarData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('data-list', JSON.stringify(value));
    } catch (e) {
      console.log(e)
    }
  };
  
  //Funcion para obtener los datos almacenados
  const ObtenerDatos = async () => {
    try {
      const value = await AsyncStorage.getItem('data-list');
      if (value !== null) {
        const tareasLocal= JSON.parse(value)
        setTask(tareasLocal)
      }
    } catch (e) {
      console.log(e)
    }
  };
  
  //use effect para obtener los cambios de la aplicacion
  useEffect(() => {
    ObtenerDatos();
  },[]);
  
  //estado para manejar el input
  const [text, setText] = useState<string>('')
  
  //estado para manejar la lista de tareas como un array
  const [task, setTask] = useState<Task[]>([])
  
  const agregar=()=>{
    const dato=[...task]
    if(text===''||dato.some(tarea=> tarea.title===text)){
      Alert.alert('No se pueden agregar tareas sin titulos o Titulos repetidos')
      setText('')
    }else{
      const data=[...task];
      const nuevaTarea={
      title:text,
      state:false,
      date:new Date(),
    }
    data.push(nuevaTarea)
    setTask(data)
    guardarData(data)
    setText('')
    }
  }
  
   const markState=(tarea:Task)=>{
    //Llamamos a la lista con el operador spread
    const data=[...task]
    //Funcion de flecha para buscar el index de la tarea que queremos marcar
    const marcar= data.findIndex(dato => dato.title ===tarea.title)
    //Iteramos la tarea marcada para saber exactamente la que necesitamos obtener
    const marcarTarea=task[marcar]
    //marca y desmarca cada vez que le damos click a la tarea seleccionadas
    marcarTarea.state=!marcarTarea.state
    setTask(data)
    guardarData(data)
   }
  
  const deleteTask=(tarea:Task)=>{
    const data=[...task]
    const buscarIndex= data.findIndex(dato => dato.title ===tarea.title)
    data.splice(buscarIndex,1)
    setTask(data)
    guardarData(data)
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Task To Do</Text>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Add New Task' value={text} onChangeText={(t:string)=> setText(t)}/>
      <TouchableOpacity style={styles.addButton} onPress={agregar}>
        <Text style={styles.whiteText}>Agregar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.scrollContainer}>
      {task.length===0 ?(
        <Text style={styles.vacio}>Inserte una Nueva Tarea</Text>
      ):(
        <FlatList data={task} renderItem={({item}) =><RenderItem item={item} deleteTask={deleteTask} markState={markState}/>}/>
      )}
    </View>
  </View>
 
  )
}

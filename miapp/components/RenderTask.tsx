import {  View, TouchableOpacity, Text } from "react-native";
import styles from "../Styles";
import { Task } from "../components/Main";

interface ItemProps{
    item:Task
    markState: (task:Task) => void,
    deleteTask: (task:Task)=> void
}

function RenderItem({item,markState,deleteTask}:ItemProps){
    return(
    <View style={styles.itemContainer}> 
    <TouchableOpacity onPress={()=>markState(item)}>
    <Text style={item.state ? styles.textEstado: styles.text}>{item.title}</Text>
    <Text style={item.state ? styles.textEstado: styles.text}>{new Date(item.date).toLocaleDateString()}</Text>
    </TouchableOpacity> 
    {
      item.state &&(
        <TouchableOpacity style={styles.removeButtom} onPress={()=>deleteTask(item)}>
        <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )
    }
    </View> 
    )
  }
  export default RenderItem;
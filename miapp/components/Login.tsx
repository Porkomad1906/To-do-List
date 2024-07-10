import React, { useState } from 'react'
import { TouchableOpacity, Text, View, TextInput, Alert, BackHandler } from 'react-native'
import styles from '../Styles'

export const Login = ({navigation}:any) => {
    const [usuario, setUsuario] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const user:string='JustinMora'
    const password:string='1919'

    const login=()=>{
        if(usuario===''||pass===''){
            Alert.alert('Contraseña o Usuario vacío')
            setPass('')
            setUsuario('')
            
        }else if(usuario!==user||pass!==password){
            Alert.alert('Contraseña o Usuario incorrectos')
            setPass('')
            setUsuario('')
        }else if(usuario===user&&pass===password){
            navigation.reset({
                index:0,
                routes:[{name:'Main'}]
            }) 
        }
    }
  return (
    <View style={styles.containerL}>
      <Text style={styles.titleL}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario"
        value={usuario}
        onChangeText={(text)=>setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={pass}
        onChangeText={(text)=>setPass(text)}
      />
        <TouchableOpacity style={styles.addButtonL} onPress={login}>
        <Text style={styles.whiteText}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

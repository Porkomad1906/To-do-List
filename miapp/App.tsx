import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './components/Login'
import { Main } from './components/Main'

const pila=createNativeStackNavigator()
export const App = () => {
  return (
   <NavigationContainer>
     <pila.Navigator>
       <pila.Screen name='home' options={{title:'Inicio',headerTintColor:'darkcyan',navigationBarColor:'darkcyan'}} component={Login}/>
       <pila.Screen name='Main' options={{title:'Task', headerShown:false,navigationBarColor:'darkcyan'}} component={Main} />
     </pila.Navigator>
   </NavigationContainer>
  )
}

export default App
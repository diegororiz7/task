//importações referentes a navegação e as telas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/Task/index';
import NewTask from './src/NewTask/index';
import EditTask from './src/EditTask/index';

//definição do Stack
const Stack = createStackNavigator();

//função principal e tela inicial
export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen
          name = 'Task'
          component= {Task}
          options = {{
            headerTintColor: '#FFF',
            headerStyle:{
              backgroundColor: '#007BFF'
            }
          }}
        />

        <Stack.Screen
          name = 'New Task'
          component= {NewTask}
          options = {{
            headerTintColor: '#FFF',
            headerStyle:{
              backgroundColor: '#007BFF'
            }
          }}
        />

        <Stack.Screen
          name = 'Edit Task'
          component= {EditTask}
          options = {{
            headerTintColor: '#FFF',
            headerStyle:{
              backgroundColor: '#007BFF'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
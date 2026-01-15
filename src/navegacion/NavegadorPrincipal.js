// Manejo de la navegación entre las pantallas


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import de todas las pantallas
import PantallaIniciarSesion from '../pantallas/IniciarSesion';
import PantallaRegistroUsuario from '../pantallas/RegistroUsuario';
import PantallaInicio from '../pantallas/Inicio';
import PantallaActividades from '../pantallas/Actividades';
import PantallaChat from '../pantallas/Chat';
import PantallaPerfil from '../pantallas/Perfil';


const Stack = createNativeStackNavigator();

export default function NavegadorPrincipal() {
  return (
    // Definimos de rutas y pantallas
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={PantallaIniciarSesion} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={PantallaRegistroUsuario} options={{ title: 'Registro' }} />
      <Stack.Screen name="Home" component={PantallaInicio} options={{ title: 'Inicio' }} />
      <Stack.Screen name="Activities" component={PantallaActividades} options={{ title: 'Actividades' }} />
      <Stack.Screen name="Chat" component={PantallaChat} options={{ title: 'Chat' }} />
      <Stack.Screen name="Profile" component={PantallaPerfil} options={{ title: 'Perfil' }} />
    </Stack.Navigator>
  );
}

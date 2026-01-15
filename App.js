// Archivo principal para iniciar la App


import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import NavegadorPrincipal from './src/navegacion/NavegadorPrincipal'; 

// Componente principal de la app
function App() {
  return (
    <NavigationContainer>
      <NavegadorPrincipal />
    </NavigationContainer>
  );
}

// Registrar el componente principal
registerRootComponent(App);

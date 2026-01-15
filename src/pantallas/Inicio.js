
// Pantalla principal de la app 


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PantallaInicio({ navigation }) {

  // alerta antes de cerrar sesión
  const cerrarSesion = () => {
    Alert.alert('Cerrar sesión', '¿Seguro que quieres salir?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sí', onPress: () => navigation.replace('Login') },
    ]);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido a T’Ayudo</Text>
      <Text style={estilos.subtitulo}>Centro de acompañamiento para adultos mayores</Text>

      {/* Botón para ir a la pantalla de actividades */}
      <TouchableOpacity style={estilos.boton} onPress={() => navigation.navigate('Activities')}>
        <Text style={estilos.textoBoton}>Ver Actividades</Text>
      </TouchableOpacity>

      {/* Botón para ir al chat */}
      <TouchableOpacity style={estilos.boton} onPress={() => navigation.navigate('Chat')}>
        <Text style={estilos.textoBoton}>Ir al Chat</Text>
      </TouchableOpacity>

      {/* Botón para ir al perfil */}
      <TouchableOpacity style={estilos.boton} onPress={() => navigation.navigate('Profile')}>
        <Text style={estilos.textoBoton}>Ver Perfil</Text>
      </TouchableOpacity>

      {/* Botón para cerrar sesión */}
      <TouchableOpacity style={[estilos.boton, estilos.botonRojo]} onPress={cerrarSesion}>
        <Text style={estilos.textoBoton}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 25,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  boton: {
    backgroundColor: '#005BAA',
    paddingVertical: 14,
    width: '80%',
    borderRadius: 10,
    marginVertical: 5,
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonRojo: {
    backgroundColor: '#C0392B',
  },
});

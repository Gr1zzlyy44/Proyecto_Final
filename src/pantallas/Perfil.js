//  Pantalla donde se muestra la información básica del usuario.


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PantallaPerfil({ navigation }) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Perfil</Text>
      <Text style={estilos.texto}>
        Aquí podrás ver tu información personal. Más adelante se podrá editar.
      </Text>

      {/* Botón para volver al inicio */}
      <TouchableOpacity style={estilos.boton} onPress={() => navigation.navigate('Home')}>
        <Text style={estilos.textoBoton}>Volver al inicio</Text>
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
  },
  texto: {
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
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

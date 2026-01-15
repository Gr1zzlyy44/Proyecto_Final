// Pantalla donde el usuario puede comunicarse con su acompañante o familiar.


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PantallaChat({ navigation }) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Chat</Text>
      <Text style={estilos.texto}>Aquí podrás enviar y recibir mensajes con tus acompañantes o familiares.</Text>

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

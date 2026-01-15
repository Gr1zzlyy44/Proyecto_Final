//  Pantalla para ingresar correo y contraseña


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getUser } from '../datos/almacenamientoUsuario'; // usuario guardado

export default function PantallaIniciarSesion({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  // Función para iniciar sesión
  const loginUser = async () => {
    try {
      const user = await getUser();
      if (user && correo === user.correo && clave === user.clave) {
        navigation.replace('Home'); // Si coincide, lo manda al inicio
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo acceder a los datos del usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>T’Ayudo</Text>
      <Text style={styles.subtitulo}>Inicio de sesión</Text>

      {/* Entrada de correo */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />

      {/* Entrada de contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={clave}
        onChangeText={setClave}
      />

      {/* Botón para ingresar */}
      <TouchableOpacity style={styles.boton} onPress={loginUser}>
        <Text style={styles.botonTexto}>Entrar</Text>
      </TouchableOpacity>

      {/* Enlace al registro */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  boton: {
    backgroundColor: '#005BAA',
    paddingVertical: 12,
    width: '80%',
    borderRadius: 8,
    marginBottom: 10,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: '#005BAA',
    fontSize: 14,
  },
});

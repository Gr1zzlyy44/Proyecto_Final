
// crear una cuenta nueva con correo y contraseña.

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { saveUser } from '../datos/almacenamientoUsuario'; // Guardamos usuario localmente

export default function PantallaRegistroUsuario({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [confirmar, setConfirmar] = useState('');

  // Función para registrar usuario
  const registrarUsuario = async () => {
    if (!correo || !clave || !confirmar) {
      Alert.alert('Error', 'Debes completar todos los campos');
      return;
    }

    if (clave !== confirmar) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      await saveUser({ correo, clave });
      Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada');
      navigation.navigate('Login');
    } catch {
      Alert.alert('Error', 'No se pudo guardar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de usuario</Text>
      <Text style={styles.subtitulo}>Crea tu cuenta para comenzar</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={clave}
        onChangeText={setClave}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
      />

      <TouchableOpacity style={styles.boton} onPress={registrarUsuario}>
        <Text style={styles.botonTexto}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', paddingHorizontal: 25 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  subtitulo: { fontSize: 16, color: '#666', marginBottom: 25 },
  input: { width: '80%', backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 15, borderWidth: 1, borderColor: '#ccc' },
  boton: { backgroundColor: '#005BAA', paddingVertical: 12, width: '80%', borderRadius: 8 },
  botonTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

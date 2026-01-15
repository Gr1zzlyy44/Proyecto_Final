import AsyncStorage from '@react-native-async-storage/async-storage';

// Guarda usuario en “base de datos”
export const saveUser = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user', jsonValue);
  } catch (e) {
    console.log('Error al guardar el usuario:', e);
  }
};

// Obtiene usuario guardado
export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error al obtener usuario:', e);
  }
};

// Elimina usuario (logout)
export const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem('@user');
  } catch (e) {
    console.log('Error al eliminar usuario:', e);
  }
};

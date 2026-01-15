// Valida formato simple de email (algo@algo.ext)
export const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

// Valida campos de login/registro (reutilizable)
export const validarCampos = (email, password) => {
  if (!email || !password) return "Por favor completa todos los campos.";
  if (!validarEmail(email)) return "El correo no tiene un formato válido.";
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
  return null; // todo ok
};

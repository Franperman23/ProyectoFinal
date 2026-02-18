import React, { createContext, useState, useEffect } from "react";

// Interfaz que define cómo es un usuario dentro de la aplicación.
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: "ADMIN" | "EMPLEADO" | "CLIENTE";
}

// Interfaz que define todo lo que el contexto de autenticación va a exponer.
interface AuthContextType {
  usuario: Usuario | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (nombre: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Creo el contexto con un valor inicial vacío, pero tipado correctamente.
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Componente proveedor del contexto.
// Envuelve toda la aplicación y permite acceder a la autenticación desde cualquier parte.
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  // Estado del usuario logueado.
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Estado del token JWT.
  const [token, setToken] = useState<string | null>(null);

  // Estado para saber si estamos cargando la sesión inicial.
  const [loading, setLoading] = useState(true);

  // Al cargar la aplicación, intento recuperar la sesión guardada en localStorage.
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("usuario");

    // Si existe token y usuario guardado, los restauro.
    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUsuario(JSON.parse(savedUser));
      } catch {
        // Si algo falla, limpio el almacenamiento.
        localStorage.clear();
      }
    }

    // Termina la carga inicial.
    setLoading(false);
  }, []);

  // FUNCIÓN LOGIN
  const login = async (email: string, password: string) => {
    // Envío la petición al backend para iniciar sesión.
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // Si el backend devuelve error, lo lanzo.
    if (!res.ok) throw new Error(data.mensaje || "Error al iniciar sesión");

    // Construyo el objeto usuario con los datos recibidos.
    const user: Usuario = {
      id: data.id,
      nombre: data.nombre,
      email: data.email,
      rol: data.rol,
    };

    // Guardo token y usuario en el estado global.
    setToken(data.token);
    setUsuario(user);

    // Persisto la sesión en localStorage.
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuario", JSON.stringify(user));

    // Guardado adicional para el registro de horas.
    localStorage.setItem("usuarioId", user.id.toString());

    // Redirección automática según el rol del usuario.
    if (user.rol === "ADMIN") {
      window.location.href = "/admin";
    } else if (user.rol === "EMPLEADO") {
      window.location.href = "/empleados";
    } else {
      window.location.href = "/";
    }
  };

  // FUNCIÓN REGISTER
  const register = async (nombre: string, email: string, password: string) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.mensaje || "Error al registrar usuario");
    }
  };

  // FUNCIÓN LOGOUT
  const logout = () => {
    // Limpio el estado global.
    setToken(null);
    setUsuario(null);

    // Limpio todo el almacenamiento local.
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("usuarioId");

    // Redirijo al inicio.
    window.location.href = "/";
  };

  return (
    // Proveedor del contexto: expone usuario, token, loading y las funciones login/register/logout.
    <AuthContext.Provider value={{ usuario, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

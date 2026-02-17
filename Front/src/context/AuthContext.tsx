import React, { createContext, useState, useEffect } from "react";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: "ADMIN" | "EMPLEADO" | "CLIENTE";
}

interface AuthContextType {
  usuario: Usuario | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (nombre: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("usuario");

    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUsuario(JSON.parse(savedUser));
      } catch {
        localStorage.clear();
      }
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.mensaje || "Error al iniciar sesión");

    const user: Usuario = {
      id: data.id,
      nombre: data.nombre,
      email: data.email,
      rol: data.rol,
    };

    setToken(data.token);
    setUsuario(user);

    // Guardamos la sesión
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuario", JSON.stringify(user));
    
    // GUARDADO CLAVE PARA REGISTRO DE HORAS:
    // Guardamos el ID por separado para facilitar el acceso desde otros componentes
    localStorage.setItem("usuarioId", user.id.toString());

    // Redirecciones según rol
    if (user.rol === "ADMIN") {
      window.location.href = "/admin";
    } else if (user.rol === "EMPLEADO") {
      window.location.href = "/empleados";
    } else {
      window.location.href = "/";
    }
  };

  const register = async (nombre: string, email: string, password: string) => {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.mensaje || "Error al registrar usuario");
    }
  };

  const logout = () => {
    setToken(null);
    setUsuario(null);
    // Limpiamos todo el rastro en localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("usuarioId"); 
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ usuario, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
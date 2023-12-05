import React from 'react';
import { Perfil } from '../components/Perfil';
import { UserAuth } from '../context/AuthContext';
import Movies from '../components/Movies';  // Importar el componente Movies
import Reviews from '../components/Reviews';  // Importar el componente Reviews
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();

  // Función para redirigir a la página de reseñas
  const redirectToMovies = () => {
    // Puedes usar el enrutamiento de React Router o cualquier otra forma de navegación
    // Aquí se muestra un ejemplo simple de redirección usando window.location
    navigate("/movie")
  };

  return (
    <div className="App">
      <h1>TAMTU Movies</h1>
      <div className="card">
        <button onClick={signout}>Cerrar sesión</button>
        <button onClick={redirectToMovies}>Ir a Reseñas</button>
      </div>
      <Perfil foto={user.picture} name={user.name} email={user.email} />
    </div>
  );
}

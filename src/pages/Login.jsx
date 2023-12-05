import styled from "styled-components";
import movielogo from "../assets/movie-icon.png";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const { signInWithGoogle } = UserAuth();

  return (
    <Container>
      <div>
        <img src={movielogo} className="logo react" alt="Movie logo" />
      </div>
      <h1>TAMTU - Project App Movie</h1>
      <br />
      <img src={googlelogo} className="logo googlonClick={signInWithGoogle}e" alt="Movie logo" />
      <div className="card">
        <button onClick={signInWithGoogle}>Iniciar con Google</button>
      </div>
      <p className="read-the-docs">
      Proyecto Parcial 3 - Aplicación para reseñar películas
      </p>
    </Container>
  );
}
const Container = styled.div`
  background-color: #242424;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  .card {
    display:flex;
    flex-direction:column;
    gap: 20px;
    button{
      color:white;
    }
  }
`;


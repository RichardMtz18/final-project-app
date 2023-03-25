import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
export function Home() {

  return ( <div className="App">
   <Perfil foto="foto" name="name" email="email"/>
   
 

  <h1>SUPABASE es COOL</h1>
  <img src={googlelogo} className="logo google" alt="React logo" />
  <div className="card">
    <button>Cerrar sesión</button>
    <p>codigo369.com</p>
  </div>
  <p className="read-the-docs">
    Supabase implementa todo el poder de PostgreSQL
  </p>
</div>);
}

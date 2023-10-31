import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('As senhas precisam ser iguais!')
    }
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span> Nome: </span>
          <input 
            type="text"
            name="displayName"
            placeholder="Nome do usuário"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            required />
        </label>
        <label>
          <span> E-mail: </span>
          <input 
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            required />
        </label>
        <label>
          <span> Senha: </span>
          <input 
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            required />
        </label>
        <label>
          <span> Confirmação de Senha: </span>
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            value={form.confirmPassword}
            onChange={e => setForm({...form, confirmPassword: e.target.value})}
            required />
        </label>

        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;

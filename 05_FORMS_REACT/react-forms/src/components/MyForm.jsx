import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: ''
  })

  const handleForm = (type, e) => {
    form[type] = e.target.value
    setForm({...form})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log(form)
    Object.keys(form).forEach(type => form[type] = '')
    setForm({...form})
  }

  return (
    <>
      <div className="my-form-component">
        <h2> Formulário </h2>
        <form className="my-form" onSubmit={handleSubmit}>
            <label>
                <span>Nome</span>
                <input 
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={form.name}
                  onChange={e => handleForm('name', e) } />
            </label>

            <label>
                <span>Email:</span>
                <input 
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => handleForm('email', e) } />
            </label>

            <label>
                <span>Regra:</span>
                <select 
                  name="role"
                  value={form.role}
                  onChange={e => handleForm('role', e) }>
                    <option value=""></option>
                    <option value="user">Usuário</option>
                    <option value="adm">Admin</option>
                    <option value="guest">Convidado</option>
                </select>
            </label>

            <button type='submit'> Submeter</button>
        </form>
      </div>
    </>
  )
}

export default MyForm
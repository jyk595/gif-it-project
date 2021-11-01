import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ setOpenLoginModal, setUser }) {
  let history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: ""
  })

  function changeLoginForm(e) {
    setLoginFormData((loginFormData)=>({
      ...loginFormData,
      [e.target.name]: e.target.value
    }))
  }

  function submitLoginForm(e) {
    e.preventDefault()

    fetch('/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginFormData)
    })
    .then(res=>res.json())
    .then(data=>{
      setUser(data)
      setLoginFormData({
        username: "",
        password: ""
      })
      history.push(`/${data.username}`)
      setOpenLoginModal(false)
    })
  }

  return(
    <form
      onSubmit={submitLoginForm}
    >
      <label>Username</label>
      <input 
        type="text"
        name="username"
        value={loginFormData.username}
        onChange={changeLoginForm}
      />

      <label>Password</label>
      <input 
        type="password"
        name="password"
        value={loginFormData.password}
        onChange={changeLoginForm}
      />

      <input 
        type="submit"
        value="Sign In"
      />
    </form>
  )
}

export default LoginForm;
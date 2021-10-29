import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignUpForm({ setUser }) {
  let history = useHistory();

  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    name: "",
    email: "",
    profile_img: "https://www.notion.so/cdn-cgi/image/w=1920,q=100/https://images.ctfassets.net/spoqsaf9291f/4VoLQQc5KlDoeYiI0pXNtP/7105562284ff8c47cba35accded51723/Scott_Stephens.png",
    password: ""
  })

  function changeSignUpForm(e) {
    setSignUpFormData(signUpFormData=>({
      ...signUpFormData,
      [e.target.name]: e.target.value
    }))
  }

  function submitSignUpForm(e) {
    e.preventDefault()

    fetch('/create-account', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpFormData)
    })
    .then(res=>res.json())
    .then(data=>{
      setUser(data)
      history.push(`/${data.username}`)
      setSignUpFormData({
        username: "",
        name: "",
        email: "",
        profile_img: "https://www.notion.so/cdn-cgi/image/w=1920,q=100/https://images.ctfassets.net/spoqsaf9291f/4VoLQQc5KlDoeYiI0pXNtP/7105562284ff8c47cba35accded51723/Scott_Stephens.png",
        password: ""
      })
    })
  }

  return(
    <form
      onSubmit={submitSignUpForm}
    >
      <label>Username</label>
      <input 
        type="text"
        name="username"
        value={signUpFormData.username}
        onChange={changeSignUpForm}
      />

      <label>Name</label>
      <input 
        type="text"
        name="name"
        value={signUpFormData.name}
        onChange={changeSignUpForm}
      />

      <label>Email</label>
      <input 
        type="text"
        name="email"
        value={signUpFormData.email}
        onChange={changeSignUpForm}
      />

      <label>Password</label>
      <input 
        type="password"
        name="password"
        value={signUpFormData.password}
        onChange={changeSignUpForm}
      />

      <input 
        type="submit"
        value="Create Account"
      />
    </form>
  )
}

export default SignUpForm;
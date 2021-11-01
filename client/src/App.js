import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Homepage from './Components/Pages/Homepage';
import UserRoute from './Components/Routes/UserRoute';

function App() {
  const [user, setUser] = useState(false);

  useEffect(()=>{
    fetch('/me')
    .then(res=>{
      if (res.ok) {
        res.json()
        .then(user=>{
          setUser(user)
          console.log(user)
        })
      }
    })
  },[])

  return (
    <Router>
      <Header
        user={user}
        setUser={setUser}
      />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/:username">
          <UserRoute 
            user={user}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

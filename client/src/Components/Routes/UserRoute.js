import {
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import ProfilePage from '../Pages/ProfilePage';

function UserRoute({ user }) {
  const { username } = useParams();
  
  return(
    <>
      <Switch>
      <Route path={`/${username}/category/:categoryName`}>

      </Route>

      <Route exact path={`/${username}`}>
        <ProfilePage
          user={user}
          username={username}
        />
      </Route>
      </Switch>
    </>
  )
}

export default UserRoute;
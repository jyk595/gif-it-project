import { useState } from 'react';
import {
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import ProfilePage from '../Pages/ProfilePage';

function UserRoute({ user }) {
  const { username } = useParams();
  const [gifList, setGifList] = useState([]);
  
  return(
    <>
      <Switch>
      <Route path={`/${username}/category/:categoryName`}>

      </Route>

      <Route exact path={`/${username}`}>
        <ProfilePage
          user={user}
          username={username}
          gifList={gifList}
          setGifList={setGifList}
        />
      </Route>
      </Switch>
    </>
  )
}

export default UserRoute;
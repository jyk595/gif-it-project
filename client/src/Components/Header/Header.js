import { useState } from 'react';

import SignUpModal from '../Modals/SignUpModal';
import LoginModal from '../Modals/LoginModal';

function Header({ user, setUser }) {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  console.log(user)

  function clickSignUpModal() {
    setOpenSignUpModal(true)
  }

  function clickLoginModal() {
    setOpenLoginModal(true)
  }

  function clickLogout() {
    setUser(false)
  }

  return(
    <>
      {openSignUpModal &&
        <SignUpModal 
          setOpenSignUpModal={setOpenSignUpModal}
          setUser={setUser}
        />
      }

      {openLoginModal &&
        <LoginModal 
        setOpenLoginModal={setOpenLoginModal}
          setUser={setUser}
        />
      }

      <h1>
        GIFIT
      </h1>

      {user ?
      <>
        <button
          onClick={clickLogout}
        >
          Logout
        </button>
      </>
      :
      <>
        <button
          onClick={clickSignUpModal}
        >
          Sign Up
        </button>

        <button
          onClick={clickLoginModal}
        >
          Login
        </button>
      </>
      }
    </>
  )
}

export default Header;
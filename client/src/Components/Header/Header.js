import { useState } from 'react';

import SignUpModal from '../Modals/SignUpModal';

function Header({ user, setUser }) {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  function clickSignUpModal() {
    setOpenSignUpModal(true)
  }

  return(
    <>
      {openSignUpModal &&
        <SignUpModal 
          setOpenSignUpModal={setOpenSignUpModal}
          setUser={setUser}
        />
      }

      <h1>
        GIFIT
      </h1>
      
      <button
        onClick={clickSignUpModal}
      >
        Sign Up
      </button>
    </>
  )
}

export default Header;
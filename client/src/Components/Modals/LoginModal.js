import LoginForm from '../Forms/LoginForm';

function LoginModal({ setOpenLoginModal, setUser }) {
  function clickClose() {
    setOpenLoginModal(false)
  }
  
  return(
    <div>
      This is the login modal
      <LoginForm
        setOpenLoginModal={setOpenLoginModal}
        setUser={setUser}
      />
      <button
        onClick={clickClose}
      >
        X
      </button>
    </div>
  )
}

export default LoginModal;
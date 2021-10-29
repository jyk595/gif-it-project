import SignUpForm from '../Forms/SignUpForm';

function SignUpModal({ setOpenSignUpModal, setUser }) {
  function clickClose() {
    setOpenSignUpModal(false)
  }
  
  return(
    <>
      <SignUpForm 
        setUser={setUser}
      />
      <button
        onClick={clickClose}
      >
        X
      </button>
    </>
  )
}

export default SignUpModal;
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui)
  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: "wilidga@gmail.com",
    password: "123456",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()){
      dispatch(startLoginEmailPassword(email,password));
    }

  };

  const isFormValid=()=>{
    if (!validator.isEmail(email)){
      dispatch(setError('Email is not valid'))
      return false
    }else if (password.trim().length === 0 ){
      dispatch(setError('Password is not valid'))
      return false
    }

    dispatch(removeError())
    return true

  }

  const handleGoogleLogin =()=>{
    dispatch(startGoogleLogin())
  }

  const { email, password } = formValues;
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
      {
          msgError &&
          (<div className='auth__alert-error'>
          {msgError}
        </div>)
        }
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="of"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block"
          disabled={ loading }
          >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login With Social Networks</p>
          <div className="google-btn"
                onClick={handleGoogleLogin}
            >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          create new account
        </Link>
      </form>
    </>
  );
};

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(email, password);

    setErrorMessage("");
    setSuccess(false);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess(true);

        
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.code);
      });
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center font-bold text-3xl my-8"> Register</div>

      <form onSubmit={handleRegister}>
        <label className="input my-8 input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type= { showPass ? "text" : "password" }
            name="pass"
            className="grow"
            placeholder="password" required
          />

          <button
          type="button"
          onClick={()=>setShowPass(!showPass)}
          className="btn btn-xs">
             { showPass ? <BsFillEyeFill />: <RiEyeCloseFill /> }  
          </button>
        </label>
        <button className="btn btn-accent  btn-wide my-8">Register</button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {success && <p className="text-green-500">successfully registered account </p> }

      <p>Already have an accound ? <Link to="/login">Login</Link> </p>
    </div>
  );
};

export default Register;

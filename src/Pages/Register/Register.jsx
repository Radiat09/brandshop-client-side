import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ContextData } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [showHide, setShowHide] = useState(false);
  const [showError, setShowError] = useState("");
  const [success, setsuccess] = useState("");
  const { createUser, profileUpdateOfUsers } = useContext(ContextData);
  const passwordValidator = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(username, email, password);
    setShowError("");
    setsuccess("");

    if (password.length < 6) {
      setShowError("Password should be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setShowError("");
      setShowError("Password must have one uppercase");
      return;
    }
    if (!passwordValidator.test(password)) {
      setShowError("");
      setShowError("Password must have one special Character");
      return;
    }

    // Register New Account Function
    createUser(email, password)
      .then((res) => {
        const currUser = res.user;
        if (currUser) {
          setsuccess("Your account is created. Please verify your email!");
          profileUpdateOfUsers(username);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowError("");
        setShowError(err.message);
      });
  };

  return (
    <div className="mt-16">
      <h3 className="text-3xl md:text-6xl font-black text-center text-orange-300">
        Register Now!
      </h3>
      <div className="mt-16">
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5 justify-center items-center"
        >
          <div className="w-full  md:w-2/5 xl:w-1/4 2xl:w-1/5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered input-error w-full px-5"
              id=""
            />
          </div>
          <div className="w-full  md:w-2/5 xl:w-1/4 2xl:w-1/5">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="input input-bordered input-error w-full px-5"
              id=""
            />
          </div>
          <div className="w-full  md:w-2/5 xl:w-1/4 2xl:w-1/5 relative indicator">
            {showError && (
              <span className="indicator-item badge text-red-500">
                {showError}
              </span>
            )}

            <input
              type={showHide ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="input input-bordered input-error w-full px-5"
              id=""
            />
            <span
              className="absolute top-4 right-6"
              onClick={() => setShowHide(!showHide)}
            >
              {showHide ? (
                <FaEyeSlash className="text-xl"></FaEyeSlash>
              ) : (
                <FaEye className="text-xl"></FaEye>
              )}
            </span>
          </div>
          <div>
            {success ? <p className="text-green-500">{success}</p> : ""}
          </div>
          <div className="w-full  md:w-2/5 xl:w-1/4 2xl:w-1/5">
            <input
              type="submit"
              value="Register"
              className="btn bg-orange-400 text-xl  text-white w-full"
              id=""
            />
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <Link className="text-green-500" to="/login">
            Already Have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

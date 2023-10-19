import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ContextData } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [showHide, setShowHide] = useState(false);
  const [showError, setShowError] = useState("");
  const { emailPassSignIn, googleSignIn } = useContext(ContextData);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setShowError("");

    emailPassSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setShowError(err.message);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" my-40">
        <h3 className="text-3xl md:text-6xl font-black text-center text-orange-300">
          Login Now!
        </h3>
        <div className="mt-16">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5 justify-center items-center"
          >
            <div className="w-full md:w-2/5 xl:w-1/4 2xl:w-1/5">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input input-bordered input-error w-full px-5"
                id=""
              />
            </div>
            <div className="w-full md:w-2/5 xl:w-1/4 2xl:w-1/5 relative ">
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
            <div className="flex flex-col justify-center">
              <Link className="text-orange-300 ">Forgot Password?</Link>
            </div>
            <div>
              {showError && (
                <span className="indicator-item badge text-red-500">
                  {showError}
                </span>
              )}
            </div>
            <div className="w-full md:w-2/5 xl:w-1/4 2xl:w-1/5">
              <input
                type="submit"
                value="Login"
                className="btn bg-orange-400 text-xl  text-white w-full"
                id=""
              />
            </div>
          </form>
          <div className="divider my-5 w-1/5 mx-auto">OR</div>
          <div className="flex gap-4 justify-center">
            <span
              onClick={handleGoogleLogin}
              className="text-3xl cursor-pointer"
            >
              <FcGoogle></FcGoogle>
            </span>
          </div>
          <div className="flex justify-center mt-5">
            <Link className="text-green-500" to="/register">
              New here?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

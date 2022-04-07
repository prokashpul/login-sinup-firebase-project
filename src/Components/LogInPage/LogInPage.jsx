import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const pageSubmitHandel = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setEmail("");
        setPassword("");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handelLoginEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelLoginPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelPasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("send email");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <>
      {!user.uid ? (
        <div className=" flex flex-col h-[100vh] items-center justify-center">
          <div className="md:w-[1080px] w-[95%] bg-indigo-100 mx-auto shadow-2xl shadow-indigo-100 p-10 ">
            <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">
              Login Now
            </h2>
            <form action="" onSubmit={pageSubmitHandel}>
              <div className="mb-5">
                <label htmlFor="email">Email:</label>
                <input
                  className="w-full p-2 focus-visible:border-lime-500 border border-indigo-600"
                  type="email"
                  name="email"
                  id="email"
                  onBlur={handelLoginEmail}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password">Password:</label>
                <input
                  className="w-full p-2 border border-indigo-600"
                  type="password"
                  name="password"
                  id="password"
                  onBlur={handelLoginPassword}
                />
              </div>
              <div className="mb-5">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="ml-2">Ready to Login?</span>
              </div>

              <input
                className="border cursor-pointer border-transparent hover:border-indigo-600 bg-indigo-600 hover:bg-transparent duration-300 text-white hover:text-indigo-600 py-2 px-10 mb-5 text-xl"
                type="submit"
                value="Log in"
              />
            </form>
            <div
              onClick={handelPasswordReset}
              className="text-indigo-600 cursor-pointer"
            >
              Forget your password?
            </div>
            <div>
              You have no account !
              <Link className="text-indigo-600 ml-2" to="/registration">
                Regetration
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <span className="text-2xl font-bold">{user.displayName}</span>
          <span
            className="text-2xl font-bold mx-5 text-indigo-600 cursor-pointer"
            onClick={logOut}
          >
            ( Sin out)
          </span>
        </>
      )}
    </>
  );
};

export default LogInPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const RegPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pageReloadHandel = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setEmail("");
        setPassword("");
        userProfileUpdate();
        emailVerify();
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handelRegName = (e) => {
    setName(e.target.value);
  };
  const handelRegEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelRegPassword = (e) => {
    setPassword(e.target.value);
  };
  const userProfileUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log(name);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email verify send");
    });
  };
  return (
    <div className=" flex flex-col h-[100vh] items-center justify-center">
      <div className="md:w-[1080px] w-[95%] bg-indigo-100 mx-auto shadow-2xl shadow-indigo-100 p-10 ">
        <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">
          Regestration Now !!
        </h2>
        <form action="" onSubmit={pageReloadHandel}>
          <div className="mb-5">
            <label htmlFor="name">Full Name:</label>
            <input
              className="w-full p-2 focus-visible:border-lime-500 border border-indigo-600"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              onBlur={handelRegName}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email">Email:</label>
            <input
              className="w-full p-2 focus-visible:border-lime-500 border border-indigo-600"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onBlur={handelRegEmail}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password:</label>
            <input
              className="w-full p-2 border border-indigo-600"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onBlur={handelRegPassword}
            />
          </div>
          <div className="mb-5">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="ml-2"> Are you agree?</span>
          </div>

          <input
            className="border cursor-pointer border-transparent hover:border-indigo-600 bg-indigo-600 hover:bg-transparent duration-300 text-white hover:text-indigo-600 py-2 px-10 mb-5 text-xl"
            type="submit"
            value="Regestration"
          />
        </form>
        <div>
          You have An account !
          <Link className="text-indigo-600 ml-2" to="/log-in">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegPage;

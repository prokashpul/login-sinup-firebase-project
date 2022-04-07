import React from "react";

const LogInPage = () => {
  return (
    <div className=" flex flex-col h-[100vh] items-center justify-center">
      <div className="md:w-[1080px] w-[95%] bg-indigo-100 mx-auto shadow-2xl shadow-indigo-100 p-10 ">
        <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">
          Login Now
        </h2>
        <form action="">
          <div className="mb-5">
            <label htmlFor="email">Email:</label>
            <input
              className="w-full p-2 focus-visible:border-lime-500 border border-indigo-600"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password:</label>
            <input
              className="w-full p-2 border border-indigo-600"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-5">
            <input type="checkbox" name="checkbox" id="checkbox" />{" "}
            <span>Ready to Login?</span>
          </div>

          <input
            className="border border-transparent hover:border-indigo-600 bg-indigo-600 hover:bg-transparent duration-300 text-white hover:text-indigo-600 py-2 px-10 mb-5 text-xl"
            type="submit"
            value="Log in"
          />
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

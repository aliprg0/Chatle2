import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md opacity-70 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Login <span className="text-blue-700">Chatle</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-lg label-text text-gray-700 ">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username..."
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-lg label-text text-gray-700 ">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter password..."
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-lg  hover:underline text-blue-600 hover:text-blue-800 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import {Link} from 'react-router-dom'; 
const Login = () => {
  return (
    <div className="flex flex-col items-center w-96 border-gray-200 border-2 shadow-lg p-4">
      <div> Login </div>
      <div>
        <form className="flex flex-col gap-2" type="submit">
          <label> Email </label>
          <input
            className="border rounded-sm p-1 border-black"
            placeholder="enter email here"
            type="email"
          />
          <label> Password </label>
          <input
            className="border rounded-sm p-1 border-black"
            placeholder="enter password here"
            type="password"
          />
          <input className="border rounded-sm p-1 border-black" type="submit" value="Login"  />
          <p> Don't have Account ? <Link className="text-blue-600" to={'/register'}>Register </Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

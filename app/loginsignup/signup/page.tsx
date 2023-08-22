'use server'

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../login/login.css";

const SignUp= () => {


  return (
    <div className="m-5 bg-black px-5 s-border b-n shadow-mustard">
      <div>
        <div className="mt-2 mb-5 mt-4 ">
          <h1 className="mustard x-font">SignUp</h1>
        </div>
        <div>
          <div className="input-container">
            <input type="email" />
            <label>First Name</label>
          </div>
          <div className="input-container">
            <input type="email" />
            <label>Last Name</label>
          </div>
          <div className="input-container">
            <input type="email" />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input type="password" />
            <label>Password</label>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button className="sx-border my-3 w-50 mx-auto mustard std-btn">
            SignUp
          </button>
       
          <p className="mb-5 mt-4 white">
            Already have an account?{" "}
            <Link href="/login">
              <span className="white">Login </span>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

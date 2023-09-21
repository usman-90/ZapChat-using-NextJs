"use server";

import "bootstrap/dist/css/bootstrap.min.css";
import "../login/login.css";
import SignupFrame from "./signupFrame";

const SignUp = () => {

  return (
    <div className="m-5 bg-black px-5 s-border b-n shadow-mustard">
      <div>
        <div className="mt-2 mb-5 mt-4 ">
          <h1 className="mustard x-font">SignUp</h1>
        </div>
        <SignupFrame />
      </div>
    </div>
  );
};

export default SignUp;

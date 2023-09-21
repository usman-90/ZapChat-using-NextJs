'use server'

import LoginFrame from "./loginframe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = async () => {
  return (
    <div className="m-5 bg-black px-5 s-border b-n shadow-mustard">
      <form>
        <div>
          <div className="mt-2 mb-5 mt-4 ">
            <h1 className="mustard x-font">Login</h1>
          </div>
          <LoginFrame />
        </div>
      </form>
    </div>
  );
};

export default Login;

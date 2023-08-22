import Link from "next/link";
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
          <div>
            <div className="input-container">
              <input type="email" name="email" />
              <label>Email</label>
            </div>
            <div className="input-container">
              <input type="password" name="password" />
              <label>Password</label>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <button className="sx-border my-3 w-50 mx-auto mustard std-btn">
              Login
            </button>
            <p className="mb-5 mt-4 white">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="white">Sign Up </span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

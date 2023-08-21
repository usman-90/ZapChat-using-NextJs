import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "./login.css";
import Bolt from "@/components/bolt/bolt";
import { headers } from "next/headers";
const Login = () => {
  
  const headersList = headers();
  let isMobile: Boolean = false;
  const useragent = headersList?.get("user-agent");
  if (
    useragent?.match(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    )
  ) {
    isMobile = true;
  }

  return (
    <div className="main w-100 d-flex justify-content-around flex-wrap align-items-center">
      {!isMobile && (
        <div className="ms-5 ps-5">
          <div className="ms-5">
            <Bolt />
          </div>
          <h1 className="mustard mt-5 x-font">Zap Chat</h1>
          <p className="mustard mb-">
            Instant Conversations, Lightning-fast Chats - Welcome to ZapChat!
          </p>
        </div>
      )}
      <div className="m-5 bg-black px-5 s-border b-n shadow-mustard">
        <div>
          <div className="mt-2 mb-5 mt-4 ">
            <h1 className="mustard x-font">Login</h1>
          </div>
          <div>
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
              Login
            </button>
            <p className="mb-5 mt-4 white">
              Don&apos;t have an account?{" "}
              <Link href="/">
                <span className="white">Sign Up </span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

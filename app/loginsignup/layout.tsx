import Bolt from "@/components/bolt/bolt";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/app/loginsignup/login/login.css";
const LoginSignupLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("server");
  return (
    <div className="main w-100 d-flex justify-content-around flex-wrap align-items-center">
      <div className="ms-5 ps-5 login-heading">
        <div className="ms-5">
          <Bolt />
        </div>
        <h1 className="mustard mt-5 x-font">Zap Chat</h1>
        <p className="mustard mb-">
          Instant Conversations, Lightning-fast Chats - Welcome to ZapChat!
        </p>
      </div>
      {children}
    </div>
  );
};

export default LoginSignupLayout;

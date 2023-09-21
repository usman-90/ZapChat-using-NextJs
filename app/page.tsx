import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Bolt from "@/components/bolt/bolt";
const Login = () => {
  return (
    <div style={{height:"100vh"}} className="main w-100 d-flex justify-content-around flex-wrap align-items-center">
      <div className="ms-5 ps-5 login-heading">
        <div className="ms-5">
          <Bolt />
        </div>
        <h1 className="mustard mt-5 x-font">Zap Chat</h1>
        <p className="mustard mb-">
          Instant Conversations, Lightning-fast Chats - Welcome to ZapChat!
        </p>
      </div>
    </div>
  );
};

export default Login;

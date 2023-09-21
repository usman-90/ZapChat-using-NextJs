"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LoginFrame = () => {
  // const [isClient, setIsClient] = useState<Boolean>();
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <div>
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
  );
};

export default LoginFrame;

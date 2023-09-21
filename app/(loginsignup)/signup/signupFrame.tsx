"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
const SignupFrame = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <>
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
        <button
          onClick={() => {
            signIn("google");
          }}
          className="sx-border my-3 w-50 mx-auto mustard std-btn"
        >
          SignUp
        </button>

        <p className="mb-5 mt-4 white">
          Already have an account?{" "}
          <Link href="/login">
            <span className="white">Login </span>{" "}
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default SignupFrame;

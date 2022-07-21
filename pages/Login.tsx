import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "hooks/useAuth";
import { async } from "@firebase/util";

type Props = {};

type TInputs = {
  email: string;
  password: string;
};

const Login = ({}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TInputs>();
  const [login, setLogin] = useState(false);
  const { user, signIn, signUp, loading, logOut } = useAuth();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    if (login) {
      // Login logic
      await signIn(data.email, data.password);
    } else {
      // Signup login
      await signUp(data.email, data.password);
    }
  };

  return (
    <div
      className={
        "relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
      }
    >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        }
        layout="fill"
        className="-z-10 !hidden opactiy-60 sm:!inline"
        alt="Netflix Logo"
      />

      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        }
        width={150}
        height={30}
        className="absolute object-contain cursor-pointer md:left-10 md:top-10 left-4 top-4"
        alt="Netflix Logo"
      />

      <form
        action=""
        className="relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold ">Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="" className="inline-block w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>

          <label htmlFor="" className="inline-block w-full">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full bg-[#e50914] py-3 rounded"
          type="submit"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[#gray]">
          New to Neflix?
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

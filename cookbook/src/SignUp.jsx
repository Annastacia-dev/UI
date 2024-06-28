import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const SignUp = ({ isSignUpOpen, setIsSignUpOpen }) => {
  return (
    isSignUpOpen && (
      <div className="flex-col flex fixed bg-tertiary/80 gap-2 left-[70%] right-4 rounded rounded-l-none min-h-[85vh] text-black z-50 mt-[60px]">
        <div className="flex justify-between pt-5 px-5 ">
          <h5 className="font-medium  uppercase text-sm"> Join Cookbook </h5>
          <IoCloseSharp
            onClick={() => setIsSignUpOpen(false)}
            className="cursor-pointer text-xl"
          />
        </div>
        <hr className="border-black" />
        <form className="flex flex-col gap-5 mt-10 px-5 md:w-3/4 ">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase">email</label>
            <input className="bg-tertiary/10 border border-gray-500 px-4 py-2"></input>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase">username</label>
            <input className="bg-tertiary/10 border border-gray-500 px-4 py-2"></input>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase">password</label>
            <input className="bg-tertiary/10 border border-gray-500 px-4 py-2"></input>
          </div>

          <button className="bg-primary text-white mt-10 uppercase font-medium px-4 py-2">sign up</button>

          <p className='text-[13px] mt-5'>
          By creating an account, you agree to our <a className='underline text-primary'>Terms</a> and have read and acknowledge the <a className='underline text-primary'>Global Privacy Statement.</a>
          </p>
        </form>
      </div>
    )
  );
};

export default SignUp;

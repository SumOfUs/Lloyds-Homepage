import React, { useState } from "react";

function SignUpContainer() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState();
  const [msg, setMsg] = useState(null);

  function saveEmail() {
    if (email && regex.test(email.toLowerCase())) {
      setMsg("Saved successfully !!");
    } else {
      setMsg("Please enter a valid email address");
    }
  }

  return (
    <div className="bg-blue-1000 py-8 px-20">
      <div className="flex lg:flex-row flex-col justify-between max-w-1440 2xl:mx-auto">
        <div className="text-white lg:text-5xl lg:mb-0 mb-8 text-4xl primary-black tracking-normal max-w-md leading-tight">
          Sign up for the Newsletter
        </div>
        <div className="text-white text-6xl primary-black tracking-normal lg:w-1/2 flex flex-col justify-center items-end">
          <div className="primary-extra-bold text-lg w-3/4 max-w-sm">Email</div>
          <div className="relative h-12 flex w-3/4 max-w-sm">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setMsg(null);
                setEmail(event.target.value);
              }}
              onKeyUp={(event) => {
                if (event.key === "Enter") saveEmail();
              }}
              className="bg-transparent border-b  outline-none py-4 text-xl primary-bold w-full"
            />
            <img
              src="/icons/arrow-right-white.png"
              alt="send arrow"
              width={16}
              height={16}
              className="absolute right-0 top-1 cursor-pointer"
              onClick={() => saveEmail()}
            />
          </div>
          <div className="text-xl primary-medium h-4">
            {msg && msg.length ? msg : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpContainer;

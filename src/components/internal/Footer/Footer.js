import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black lg:pt-16 lg:pb-12 lg:px-20 px-6 py-8 w-full text-white ">
      <div className="max-w-1440 2xl:mx-auto w-full flex flex-col items-center">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-1/5">
            <a
              href="https://insureourfuture.co/what-is-lloyds-of-london-and-how-does-it-help-fuel-the-climate-crisis/"
              target="_blank"
              className="primary-extra-bold text-2xl cursor-pointer hover:text-blue-1200"
            >
              Insure Our Future
            </a>
            <div className="mt-8 mb-6 primary-medium tracking-wider leading-6 hidden">
              Wheal Kitty Workshops, St Agnes, Cornwall, TR5 0RD
            </div>
            <div className="primary-medium tracking-wider leading-6 hidden">
              Tel: 123 1239 1210
            </div>
          </div>

          <div className="flex flex-col ">
            <a
              href="/problem"
              className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200"
            >
              Problem
            </a>
            <a
              href="/solution"
              className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200"
            >
              Solution
            </a>
            <a
              href="/members"
              className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200"
            >
              Members
            </a>
            <a
              href="/latest"
              className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200"
            >
              Latest
            </a>
            <a
              href="/act"
              className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200"
            >
              Act
            </a>
          </div>

          <div className="flex flex-col w-1/6">
            <div className="primary-black 2xl:text-3xl xl:text-2xl text-xl p-4 bg-blue-900 flex justify-center tracking-wider leading-6">
              Follow us on
            </div>
            <div className="flex flex-row justify-between mt-8">
              <img
                src="/icons/twitter.png"
                alt="twitter"
                width={24}
                height={24}
                className="cursor-pointer opacity-75 hover:opacity-100"
              />

              <img
                src="/icons/instagram.png"
                alt="instagram"
                width={24}
                height={24}
                className="cursor-pointer opacity-75 hover:opacity-100"
              />
              <img
                src="/icons/facebook.png"
                alt="facebook"
                width={24}
                height={24}
                className="cursor-pointer opacity-75 hover:opacity-100"
              />
              <img
                src="/icons/linkedin.png"
                alt="linkedin"
                width={24}
                height={24}
                className="cursor-pointer opacity-75 hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <div className="pt-16 text-white primary-medium tracking-wide">
          © {year} Insure our future · All Rights Reserved ·
        </div>
      </div>
    </div>
  );
}

export default Footer;

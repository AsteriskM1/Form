import React from 'react';
import { backCard, frontCard, gradient, mobileGradient, logo, complete } from '../assets/images'; 
import { Link, useNavigate } from 'react-router-dom';

const Thanks = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!")
    navigate("/");
  }

  const isSmall = window.matchMedia('(max-width: 399px)').matches;
  return (
    <section className="flex mobile:flex-row flex-col">
      <div className="flex mobile:flex-row flex-col">
        <div>
          <div>
            <img
              src={isSmall ? mobileGradient : gradient}
              className={"mobile:left-0 mobile:h-[100vh] top-0 w-[375px] h-[240px]"}
            />
          </div>
          <div>
            <img src={frontCard} className="absolute z-10  mobile:left-32 mobile:top-36 top-40 left-4" />
            <img src={logo} className="absolute z-20 mobile:left-36 mobile:top-40 top-44 left-8" />
          </div>
          <img src={backCard} className="absolute mobile:top-[415px] mobile:left-52 left-24 top-8" />
        </div>
        <div className="flex flex-col items-center mobile:mt-64 mt-52 mobile:ml-96 ml-12">
          <img src={complete} className="" />
          <h1 className="text-3xl font-normal mt-8">Thank You!</h1>
          <p className="text-lg font-normal mt-3">We've added your card details</p>
          <Link to="/">
            <button type="submit" className="mobile:w-[379px] w-[315px] h-[53px] bg-black text-white mobile:mt-4 mt-6 rounded-lg transition duration-150 ease-in-out hover:scale-105 hover:drop-shadow-lg cursor-pointer">Continue</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Thanks
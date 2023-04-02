import React, { useState } from 'react';
import { backCard, frontCard, gradient, mobileGradient, logo } from '../assets/images'; 
import { useNavigate  } from 'react-router-dom';


const Form = () => {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [code, setCode] = useState('000');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!")
    navigate("/thanks");
  }

  const isSmall = window.matchMedia('(max-width: 399px)').matches;

  return (
    <section className="flex mobile:flex-row flex-col">
      <div className="flex mobile:flex-row flex-col">
        <div>
          <div>
            <img
              src={isSmall ? mobileGradient : gradient}
               alt="gradient background"
              className={"mobile:left-0 mobile:h-[100vh] top-0 w-[375px] h-[240px]"}
            />
          </div>
          <div>
            <img src={frontCard}  alt="front card" className="absolute z-10 mobile:left-32 mobile:top-36 top-40 left-4" />
            <img src={logo } alt="circle design" className="absolute z-20 mobile:left-36 mobile:top-40 top-44 left-8" />
          </div>
          <img src={backCard} alt="back card" className="absolute mobile:top-[415px] mobile:left-52 left-24 top-8" />
        </div>
        <div>
          <p className="absolute mobile:top-[17rem] mobile:left-44 top-[17rem] left-20 z-30 mobile:text-3xl text-xl text-white tracking-[0.07rem]">{number}</p>
          <p className="absolute mobile:top-[21rem] mobile:left-44 top-[20rem] left-20 z-30 mobile:text-xl text-sm text-white">{username}</p>
          <p className="absolute mobile:top-[21rem] mobile:left-[27.5rem] top-[20rem] left-[18rem] z-30 mobile:text-xl text-sm text-white">{month} / {year}</p>
          <p className="absolute mobile:top-[32.65rem] mobile:left-[35rem] top-[7.5rem] left-[24rem] z-30 mobile:text-xl text-xl text-white">{code}</p>
        </div>
        <div className="flex justify-center mobile:ml-96 mobile:mt-48 mt-40 ml-12 ">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col">
              <label className="font-semibold text-base uppercase">Cardholder Name</label>
              <input 
                type="text" 
                inputMode='text' 
                placeholder="e.g. Janet Appleseed" 
                required={true}
                pattern="^([a-zA-Z]+([ ]?[a-zA-Z])+)$"
                onChange={e => setUsername(e.target.value)} 
                className="mobile:w-[379px] w-[315px] h-[43px] peer border border-solid border-black rounded-[7px] px-4 placeholder:opacity-40 mt-3" 
              />
            </div>
            <label htmlFor="ccn" className="font-semibold text-base uppercase mt-9">Card Number</label>
            <input 
              id="ccn" 
              type="tel" 
              inputMode="numeric" 
              pattern="[0-9\s]{13,19}" 
              autoComplete="cc-number" 
              maxLength="19" 
              placeholder='e.g. 1234 5678 9123 0000'
              onChange={e => setNumber(e.target.value)} 
              required={true}
              className="mobile:w-[379px] w-[315px] h-[43px] peer border border-solid border-black rounded-[7px] px-4 placeholder:opacity-40 mt-3" 
            />
            <div className="flex flex-row mt-9">
              <div className="flex flex-col">
                <label className="font-semibold text-sm uppercase">EXP. DATE (MM/YY)</label>
                <div className="flex flex-row">
                  <input type="tel" inputMode='numeric' placeholder="MM" pattern="^(0[1-9]|1[0-2])$" onChange={e => setMonth(e.target.value)} required={true} className="mobile:w-[74px] w-[62px] h-[43px] peer border border-solid border-black rounded-[7px] px-4 placeholder:opacity-40 mt-3 mr-5" />
                  <input type="tel" inputMode='numeric' placeholder="YY" pattern="^\d{2}(\d{2})?$" onChange={e => setYear(e.target.value)} required={true} className="mobile:w-[74px] w-[62px] h-[43px] peer border border-solid border-black rounded-[7px] px-4 placeholder:opacity-40 mt-3" />
                </div>
              </div>
              <div className="flex flex-col ml-7">
                <label className="font-semibold text-sm uppercase">CVC</label>
                <input type="tel" inputMode='numeric' pattern="^\d{3,4}$" placeholder="e.g. 1234" onChange={e => setCode(e.target.value)} required={true} className="mobile:w-[180px] w-[139px] h-[43px] peer border border-solid border-black rounded-[7px] px-4 placeholder:opacity-40 mt-3" />
              </div>
            </div>
            <button type="submit" className="mobile:w-[379px] w-[315px] h-[53px] bg-black text-white mobile:mt-11 mt-9 rounded-lg transition duration-150 ease-in-out hover:scale-105 hover:drop-shadow-lg cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
      
      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </section>
  )
}

export default Form;
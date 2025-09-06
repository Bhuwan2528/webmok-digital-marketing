import React, { useEffect } from 'react'
import './Stats.css'
import CountUp from 'react-countup'
import { GiLaurelsTrophy } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";


const Stats = () => {

  return (
    <div className='stats'>

        <div className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><IoPeopleSharp /></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={9000} duration={3} enableScrollSpy scrollSpyDelay={200}  />+</h3>
                </div>
            </div>
                    <p>Students Placed</p>

        </div>

        <div className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><SiGoogleanalytics /></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={15} duration={2} enableScrollSpy scrollSpyDelay={200}  /> LPA</h3>
                </div>
            </div>
            <p>Highest Package</p>

        </div>

        <div className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><GiLaurelsTrophy/></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={14} duration={2} enableScrollSpy scrollSpyDelay={200}  />+</h3>
                </div>
            </div>
            <p>Year Experienced</p>

        </div>

        <div className="stats-card">
            <div className="card-top">
                <div className="card-left">
                    <span><FaRegSmile /></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={10000} duration={3} enableScrollSpy scrollSpyDelay={200}  />+</h3>
                </div>
            </div>
                    <p>Students Satisfied</p>
        </div>

    </div>
  )
}

export default Stats
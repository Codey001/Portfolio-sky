import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'> {text} </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Sunny</span>👋
            <br />
            A Computer Science Student from India
            <br />
            <span class="text-xs">Scroll left or right to know more ↔</span>
        </h1>
    ),
    2: (
        <InfoBox 
            text="Explore my professional journey, diverse skill set, and hands-on experience in the field."
            link = '/about'
            btnText = "Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Completed multiple projects in various domains. Curious about the impact?"
        link = '/projects'
        btnText = "Visite my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm a few keystrokes away."
        link = '/contact'
        btnText = "Let's talk"
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
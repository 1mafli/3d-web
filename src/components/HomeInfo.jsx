import React from 'react'

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello a nevem <spam className="font-semibold">Zsolt</spam>👋
        </h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
}

const InfoBox = ({ text, link, btnText }) => {
    <div>
        {text }
    </div>
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}


export default HomeInfo
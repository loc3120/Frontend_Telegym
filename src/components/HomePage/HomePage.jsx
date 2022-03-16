import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CoachInfo from './CoachInfo';
import Signature from './Signature';
import Slider from './Slider/Slider'

const HomePage = () => {
    return (
        <>
            <Slider />
            <Signature />
            <div className='container'>
                <CoachInfo />
            </div>
        </>
    )
}

export default HomePage;
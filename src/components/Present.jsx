import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './GeneralStylesheets/Present.css'
import DataPresent from './NavStatus/DataPresent'

const Present = (props) => {

    return (
        <div className='back_image_container'>
            {(() => {
                switch (props.name) {
                    case 'Membership':
                        return (
                            <div className='back_image' key={DataPresent[0].id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ImagePublic/PresentImage1.png'})` }}>
                                <h2>{DataPresent[0].title}</h2>
                                <hr />
                                <p>{DataPresent[0].subtitle}</p>
                            </div>
                        )
                    case 'Coach':
                        return (
                            <div className='back_image' key={DataPresent[1].id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ImagePublic/PresentImage2.png'})` }}>
                                <h2>{DataPresent[1].title}</h2>
                                <hr />
                                <p>{DataPresent[1].subtitle}</p>
                            </div>
                        )
                    case 'TryingPractice':
                        return (
                            <div className='back_image' key={DataPresent[2].id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ImagePublic/PresentImage3.png'})` }}>
                                <h2>{DataPresent[2].title}</h2>
                                <hr />
                                <p>{DataPresent[2].subtitle}</p>
                            </div>
                        )
                    case 'Candidate':
                        return (
                            <div className='back_image' key={DataPresent[3].id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ImagePublic/PresentImage4.png'})` }}>
                                <h2>{DataPresent[3].title}</h2>
                                <hr />
                                <p>{DataPresent[3].subtitle}</p>
                            </div>
                        )
                    case 'Contact':
                        return (
                            <div className='back_image' key={DataPresent[4].id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ImagePublic/PresentImage5.png'})` }}>
                                <h2>{DataPresent[4].title}</h2>
                                <hr />
                                <p>{DataPresent[4].subtitle}</p>
                            </div>
                        )
                    default:
                        return null;
                }
            }
            )()}
        </div>
    )
}

export default Present
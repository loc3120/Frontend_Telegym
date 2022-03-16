import React, { useState } from 'react';
import gymdetail1 from '../ListImage/gym_detail1.jpg'
import gymdetail2 from '../ListImage/gym_detail2.jpg'
import gymdetail3 from '../ListImage/gym_detail3.jpg'
import yogadetail1 from '../ListImage/yoga_detail1.jpg'
import yogadetail2 from '../ListImage/yoga_detail2.jpg'
import yogadetail3 from '../ListImage/yoga_detail3.jpg'
import './stylesheets/ListCard.css'

const MembershipCard = (props) => {
    return (
        <div className='package_detail'>
        <h3>{props.name}</h3>
        <div className='package_image_container'>
            <img src={gymdetail1} alt='Ảnh gym 1' />
        </div>
        <div>
            <p>{props.description}</p>
            <p>{props.time_duration}</p>
            <div>
                <button>Xem chi tiết</button>
            </div>
        </div>
    </div>
    )
}
export default MembershipCard
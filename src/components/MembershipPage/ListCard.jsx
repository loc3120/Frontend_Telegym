import React, { useState } from 'react';
import './stylesheets/ListCard.css'
import MembershipCardService from '../LoadService/MembershipCardService';
import MembershipCard from './MembershipCard';
import SelectedBoxData from './SelectedBoxData';
import { Link } from 'react-router-dom';
import gold_card from '../ListImage/gold_card.jpg';
import platinum_card from '../ListImage/platinum_card.jpg';
import diamond_card from '../ListImage/diamond_card.jpg';

const ListCard = () => {

    const [state, setState] = useState([])

    React.useEffect(() => {
        MembershipCardService.getAll().then((res) => {
            setState(res.data.dataResponse.data)
        })
    }, [])

    return (
        <div className='list_container'>
            <h2>Các loại thẻ hội viên hiện tại</h2>
            <hr />
            <div className='listcard_container'>
                {state.map((item, index) => {
                    return (
                        <div className="row row-card" key={item.id}>
                            <div className="col-12 col-md-2">
                                <img src={index === 0 ? gold_card : index === 1 ? platinum_card : diamond_card} alt='Member card' />
                            </div>
                            <div className="col-12 col-md-8">
                                <p className="card-name">{item.cardname}</p>
                                <div className="membership-detail">
                                {item.description.split("<br />").map((it, idx) => {
                                    return (
                                        idx === 0 ?
                                        <p><b>{it}</b></p> : 
                                        <p>&nbsp;{it}</p>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="link_register">
                                    <Link to="/Contact" className="buy_btn">Mua ngay</Link>
                                    <Link to="/TryingPractice" className="register_trying">Đăng ký tập thử</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <SelectedBoxData></SelectedBoxData>
                <div className='package_list'>
                    {props.cardtype.map((gympackage, index) =>
                        <MembershipCard key={gympackage.id} gympackage={gympackage}></MembershipCard>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default ListCard;
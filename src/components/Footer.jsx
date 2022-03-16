import React, { useState } from 'react';
import './GeneralStylesheets/Footer.css'
import logo from './ListImage/Logo.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
  
  return (
    <footer>
      <div className='footer_container d-flex'>
        <div className='col-md-6 col-lg-6 col-sm-6 col-6'>
          <div className='logo_container'>
            <img src={logo} alt='Logo brand' />
          </div>
          <div className='address'>
            <b>Địa chỉ Telegym 1:</b> Tầng 4 tòa nhà Landmark 89, số 66 Võ Văn Tần, Hà Nội
          </div>
          <div className='address'>
            <b>Địa chỉ Telegym 2:</b> Tầng 2 tòa nhà Sandico số 16 Nguyễn Chí Thanh, Hà Nội
          </div>
          <div className='address'>
            <b>Địa chỉ Telegym 3:</b> Tòa BB4 khu đô thị SeaGate Park, số 12 Hoàng Giám Tự, Đà Nẵng
          </div>
          <div className='address'>
            <b>Địa chỉ Telegym 4:</b> Tầng 3 tòa nhà trung tâm bến cầu Thị Nghè, số 2 Thị Nghè, TP.HCM
          </div>
          <div className='address'>
            <b>Địa chỉ Telegym 5:</b> Tầng 2 tòa nhà SF8, số 10 Bình Tân, TP.HCM
          </div>
        </div>
        <div className='col-md-6 col-lg-6 col-sm-6 col-6 contact_container'>
          <h3>Thông tin</h3>
          <hr></hr>
          <div className='menu_info_container'>
            <ul className='menu_info'>
              <li>Trung tâm tập luyện thể hình, fitness, yoga chuyên nghiệp: The Telegym Gym and Yoga professional</li>
              <li>Huấn luyện viên</li>
              <li>Phòng tập</li>
              <li>Gói tập</li>
            </ul>
          </div>
          <h3>Liên hệ</h3>
          <hr></hr>
          <div className='menu_info_container'>
            <ul className='menu_info'>
              <li>
                <b>Website: </b>
                <Link to = "/">Telegym.com</Link>
              </li>
              <li>
                <b>SĐT: </b>19000091
              </li>
              <li>
                <b>Nếu có thắc mắc hãy liên hệ: </b>
                <a href='https://www.facebook.com/NGL.015067.2.20/' target="{_blank}">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
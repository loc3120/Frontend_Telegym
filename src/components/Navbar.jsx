// import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'

// export const Nav = styled.nav `
//     background: #392642;
//     height: 80px;
//     display: flex;
//     justify-content: space-between;
//     padding: 0.5rem calc((100vw - 1000px) / 2);
//     z-index: 10;
// `

// export const NavLink = styled(Link)`
//     color: #fff
//     display: flex;
//     align-item: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;

//     &.active {
//         color: #15cdfc;
//     }
// `

// export const Bars = styled(FaBars)`
//     display: none;
//     color: #fff;

//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `

// export const NavMenu = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: -24px;
//     @media screen and (max-width: 768px) {
//         display: none;
//     }

//     /*3rd Nav */
//     width: 100vw;
//     white-space: no-wrap;
// `

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     /*3rd Nav */
//     justify-content: flex-end;
//     width: 100vw;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }

// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #256ce1;
//     padding: 10px, 22px;
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &.hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: 010606;
//     }
// `

import { NodeExpandOutlined } from '@ant-design/icons/lib/icons';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    text-align: center;
    cursor: pointer;
    padding: 0;

    &:hover {
      background: #000;
      border-radius: 0;
    }
  }

  &:hover {
    color: #888888;
  }

  &.active {
    color: #15cdfc;
  }
`;

export const NavLogo = styled.img`
  height: 100%;
  width: auto;
  ${'' /* object-fit: cover; */}

  @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 0%);
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  ${'' /* width: 100vw;
  white-space: nowrap; */}
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 500px;
      position: absolute;
      top: 80px;
      right: -100%;
      opacity: 1;
      transition: all 0.5s ease;

    &.active {
      background: #823576;
      right: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 999;
    }
  }

  ${'' /* &.active {
    display: block;
    background: #298357;
    right: 0;
    top: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 999;
  } */}
`;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//     justify-content: flex-end;
//     width: 30vw; 
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   font-size: 1rem;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;
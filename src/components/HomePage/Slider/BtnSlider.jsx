import React from 'react'
import '../stylesheets/Slider.css'
import leftArrow from './Icons/arrow-left.svg'
import rightArrow from './Icons/arrow-right.svg'

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button className={direction === "next" ? 'btn-slide next' : "btn-slide prev"} onClick={moveSlide}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow_direction"/>
        </button>
    )
}

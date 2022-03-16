import React, { useState } from 'react';
import '../stylesheets/Slider.css'
import DataSlider from '../../NavStatus/DataSlider'
import BtnSlider from './BtnSlider'

// const Slider = () => {
//     return (
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img className="d-block w-100 col-md-12 col-sm-12 col-12" src={img1} alt="First slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h3>Phòng yoga rộng rãi</h3>
//                         <button>
//                             <a href='#'>Xem ngay</a>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <img className="d-block w-100 col-md-12 col-sm-12 col-12" src={img2} alt="Second slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h3>Đội ngũ PT có trình độ chuyên môn cao</h3>
//                         <button>
//                             <a href='#'>Xem ngay</a>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <img className="d-block w-100 col-md-12 col-sm-12 col-12" src={img3} alt="Third slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h3>Phòng tập trang thiết bị cao cấp</h3>
//                         <button>
//                             <a href='#'>Xem ngay</a>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 {/* <span className="sr-only">Trước</span> */}
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 {/* <span className="sr-only">Sau</span> */}
//             </a>
//         </div>
//     );
// }

// export default Slider;

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== DataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === DataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(3)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {DataSlider.map((obj, index) => {
                return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    key={obj.id}
                    >
                        <img src={process.env.PUBLIC_URL + `/ImagePublic/Anh${index + 1}.jpg`} alt='sliderImage' />
                    </div>
                )
            })}
            <BtnSlider moveSlide = {nextSlide} direction={"next"}/>
            <BtnSlider moveSlide = {prevSlide} direction={"prev"}/>
 
            <div className='container-dots'>
                {Array.from({length: 3}).map((item, index) => (
                    <div onClick = {() => moveDot(index + 1)}className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    )
}

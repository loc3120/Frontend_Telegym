import React, { useState } from 'react';
import './stylesheets/Signature.css'
import sig1 from '../ListImage/sig1.jpg'
import sig2 from '../ListImage/sig2.png'
import sig3 from '../ListImage/sig3.png'

const Signature = () => {
    return (
        <>
            <h3>Những hình ảnh nổi bật</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4 col-12">
                        <img src={sig1} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4 col-12">
                        <img src={sig2} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4 col-12">
                        <img src={sig3} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signature;
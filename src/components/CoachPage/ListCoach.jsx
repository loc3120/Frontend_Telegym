import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import './stylesheets/ListCoach.css'
import CoachService from '../LoadService/CoachService';

const ListCoach = () => {

    const stepPractice = [
        {
            id: uuidv4(),
            step: 1,
            contentTitle: "Xác định mục tiêu thể chất -",
            content: "(chú ý: nhiều khi mục tiêu bạn nghĩ đến trước đó chưa hẳn là mục tiêu thiết thực và chính xác nhất dành cho bạn)."
        },
        {
            id: uuidv4(),
            step: 2,
            contentTitle: "Xác định khả năng thể chất hiện tại - ",
            content: "(chú ý: tập trung vào các yếu tố như các biến dạng về tư thế hiện hữu, sức khỏe cơ trọng tâm, các chấn thương vật lý...)."
        },
        {
            id: uuidv4(),
            step: 3,
            contentTitle: "HLV cá nhân sẽ lên kế hoạch tập luyện cho bạn ",
            content: "để phù hợp nhất với khả năng thể chất hiện tại mà vẫn có thể đạt được mục tiêu đặt ra, bao gồm Mức độ thường xuyên, Cường độ "
                + "tập, Loại bài tập. Và đừng quên chia sẻ với HLV những dạng bài tập mà bạn thích."
        },
        {
            id: uuidv4(),
            step: 4,
            contentTitle: "Thực hiện nghiêm túc ",
            content: "kế hoạc HLV đã đưa ra cho bạn."
        }
    ]

    const [listtop6, setListtop6] = useState([])

    React.useEffect(() => {
        CoachService.getTop6().then((res) => {
            setListtop6(res.data.dataResponse)
        })
    }, [])
    return (
        <>
            <div className="coach_info">
                <div className="row">
                    <div className="col-12">
                        <h1>Các bước tập với HLV cá nhân</h1>
                    </div>
                </div>
                <div className="row">
                    {stepPractice.map((item) => {
                        return (
                            <div className="col-12" style={{ marginBottom: "10px" }} key={item.id}>
                                <div className="step">
                                    <div className="number center">
                                        <p>Bước</p><p className="numb">{item.step}</p>
                                    </div>
                                    <div className="step-content">
                                        <p>
                                            <b>{item.contentTitle}</b>{item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="coach_info">
                <div className="row">
                    <div className="col-12">
                        <h1>Các huấn luyện viên ưu tú của hệ thống</h1>
                    </div>
                </div>
            </div>
            <div className='pt_img_container'>
                <img src={require("../ListImage/listPT.jpg")} alt="List PT" />
            </div>
            <div className="coach_info">
                <div className="row">
                    <div className="col-12">
                        <h1>Top 6 HLV cá nhân</h1>
                    </div>
                </div>
                <div className="row">
                    {listtop6.map((it) => {
                        return (
                            <div className="col-4 card_img" key={it.id}>
                                <div className='img_detail_container'>
                                    {(() => {
                                        switch (it.name) {
                                            case 'Vin Diesel':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/vin diesel.jpg")} alt="pt_spotline" />
                                                    </>

                                                )
                                            case 'Chân Tử Đan':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/ipman.jpg")} alt="pt_spotline" />
                                                    </>

                                                )
                                            case 'Chris Evans':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/captain.jpg")} alt="pt_spotline" />
                                                    </>
                                                )
                                            case 'Dwayne Johnson':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/dwayne.jpg")} alt="pt_spotline" />
                                                    </>
                                                )
                                            case 'Jason Statham':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/jason.jpg")} alt="pt_spotline" />
                                                    </>
                                                )
                                            case 'John Cena':
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/cena.jpg")} alt="pt_spotline" />
                                                    </>
                                                )
                                            default:
                                                return (
                                                    <>
                                                        <img src={require("../ListImage/default.png")} alt="default_image" />
                                                    </>
                                                )
                                        }
                                    }
                                    )()}
                                </div>
                                <p>{it.name}</p>
                            </div>
                        )
                    })}
                    {/* <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/vin diesel.jpg")} alt="pt_spotline" />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div>
                    <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/dwayne.jpg")} alt="pt_spotline " />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div>
                    <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/jason.jpg")} alt="pt_spotline" />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div>
                    <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/cena.jpg")} alt="pt_spotline" />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div>
                    <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/ipman.jpg")} alt="pt_spotline" />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div>
                    <div className="col-4 card_img">
                        <div className='img_detail_container'>
                            <img src={require("../ListImage/captain.jpg")} alt="pt_spotline" />
                        </div>
                        <p>Đỗ Cao Việt Hoàng</p>
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default ListCoach;
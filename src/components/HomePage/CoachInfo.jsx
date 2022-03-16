import React, { useState } from 'react';
import './stylesheets/CoachInfo.css'
import pt1 from '../ListImage/pt1.jpg'
import pt2 from '../ListImage/pt2.jpg'
import pt3 from '../ListImage/pt3_yoga.jpg'

const CoachInfo = () => {
    return (
        <div className='Present_Coach'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12 col-12'>
                    <h3>CÂU CHUYỆN KHỞI NGHIỆP</h3>
                    <h4>
                        Từ bỏ sự nghiệp tài chính ở nước ngoài, Nguyễn Võ Hoàng Yên về Việt Nam lập nghiệp với mong muốn 
                        giúp cộng đồng nhận thức được rằng fitness không chỉ tạo ra sự thay đổi về hình thể mà còn giúp cuộc 
                        sống của bạn tích cực và giàu năng lượng hơn. Để hiện thực hóa lý tưởng của mình, Trí Dũng bắt đầu với 
                        việc làm kênh Youtube Telegym nhằm chia sẻ những kiến thức tập gym chính thống anh học được ở nước ngoài 
                        từ các huấn luyện viên hàng đầu thế giới. Nhằm nâng cao kiến thức khoa học bài bản hơn, anh tiếp tục sang 
                        Mỹ học thêm và trở thành người Việt Nam đầu tiên đạt chứng chỉ PICP của Poliquin Group. Giữa năm 2015, khi 
                        đã tích lũy đủ kinh nghiệm, Trí Dũng quyết định thành lập phòng tập Telegym Ultimate Fitness (TUF) đầu tiên
                        ở Lương Yên. Qua quá trình phát triển không ngừng, năm 2017 chuỗi phòng tập đã mở rộng thêm cơ sở 10 ở Hàng Bài.
                    </h4>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 col-12'>
                    <img src={pt1}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <h3>TRIẾT LÝ HOẠT ĐỘNG</h3>
                    <h4>
                        Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn 
                        đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, 
                        những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ 
                        về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng chuyển biến theo hướng tích 
                        cực và lành mạnh hơn. Đối với chúng tôi, lợi ích của khách hàng chính là lợi 
                        nhuận quý báu nhất. Kết quả thực sự của khách hàng là những gì thương hiệu 
                        Telegym luôn hướng đến.
                    </h4>
                </div>
                <div className='col-md-6'>
                    <img src={pt2}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <h3>ĐỘI NGŨ HLV DÀY DẠN KINH NGHIỆM</h3>
                    <h4>
                        Mọi huấn luyện viên của Telegym đều được đào tạo và có kinh nghiệm tối thiểu
                        2 năm trong ngành. Rất nhiều học viên đã từng theo học và thay đổi chỉ sau 
                        tối thiểu 2 tháng. Những học viên từng theo học hoặc từng tập luyện tại đây đều 
                        đánh giá Telegym là 1 trong những nơi mà họ thấy tin tưởng nhất, là nơi mà họ chắc 
                        chắn sẽ giới thiệu cho bạn bè hoặc người thân. Hãy đến với Telegym, các bạn sẽ có 
                        những cảm giác khác lạ, khác biệt với những nơi khác và chắc chắn bạn sẽ hài lòng.
                    </h4>
                </div>
                <div className='col-md-6'>
                    <img src={pt3}/>
                </div>
            </div>
        </div>
    );
}

export default CoachInfo;
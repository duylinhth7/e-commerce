import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import "../../styles/scss/footer.scss"
function Footer() {
    return (
        <>
            <footer className='footer'>

                <div className="footer__info">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">

                                <ul>
                                    <li>
                                        <h4>LIÊN HỆ</h4>
                                    </li>
                                    <li>
                                        <EnvironmentOutlined />
                                        Hà Nội
                                    </li>
                                    <li>
                                        <PhoneOutlined />
                                        +84842951626
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">

                                <ul>
                                    <li>
                                        <h4>CÁC THƯƠNG HIỆU</h4>
                                    </li>
                                    <li>
                                        IPHONE
                                    </li>
                                    <li>
                                        SAMSUNG
                                    </li>
                                    <li>
                                        OPPO
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <h4>VỀ CHÚNG TÔI</h4>
                                    </li>
                                    <li>
                                        Giới thiệu công ty
                                    </li>
                                    <li>
                                        Hệ thống cửa hàng
                                    </li>
                                    <li>
                                        Tuyển dụng
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                                    </li>
                                    <li>
                                        Chính sách bảo hành
                                    </li>
                                    <li>
                                        Chính sách đổi trả sản phẩm
                                    </li>
                                    <li>
                                        Hỏi Đáp Mua Hàng Online
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coppyright">
                    <div className='coppyright__dir'></div>
                    <p>Copyright © 2025 by HoangDuyLinh</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;
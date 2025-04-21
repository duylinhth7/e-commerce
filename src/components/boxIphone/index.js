import { useEffect, useState } from "react"
import { getListApple } from "../../services/getListProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/scss/boxIphone.scss"
import ViewMore from "../viewMore";
import { useNavigate } from "react-router-dom";
import ProductActions from "../productActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cart";
import { AppleFilled } from "@ant-design/icons"
import { Skeleton } from 'antd';
function BoxIphone() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch()
    const fetchApi = async () => {
        const res = await getListApple();
        setData(res)
    }
    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Hiển thị 5 phim trên desktop
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div className="custom-next-arrow">➡</div>,
        prevArrow: <div className="custom-prev-arrow">⬅</div>,
        responsive: [
            {
                breakpoint: 1024, // Laptop & Tablet lớn hơn
                settings: {
                    slidesToShow: 3, // Hiển thị 4 phim
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 2, // Hiển thị 2 phim trên màn nhỏ
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // Điện thoại nhỏ
                settings: {
                    slidesToShow: 2, // Hiển thị 1 phim trên điện thoại
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const nav = useNavigate();
    const handleClick = (index) => {
        nav(`/detail/apple/${index}`)
    };
    const addCart = (product) => {
        dispatch(addToCart(product))
    };
    
    return (
        <>
            {
                data ?
                    (<>
                        <div className="container">
                            <div className="box__iphone">
                                <div className="box-title">
                                    <div className="inner-title">
                                        <AppleFilled />
                                        iPhone</div>
                                    <div className="inner-dir"></div>
                                </div>
                                <div className="box__iphone-list">
                                    <Slider {...settings}>
                                        {data.map((item, index) => (
                                            <div key={index} className="box__iphone-item" onClick={() => handleClick(index)} >
                                                <div className="box__iphone-image">
                                                    <img src={item.image} loading="lazy" />
                                                </div>
                                                <div className="box__iphone-info">
                                                    <div className="box__iphone-name">{item.name}</div>
                                                    <div className="box__iphone-price">
                                                        <div className="new">{item.special_price.toLocaleString("vi-VN")}đ</div>
                                                        <div className="old">{item.old_price.toLocaleString("vi-VN")}đ</div>
                                                    </div>
                                                    <div className="inner-rate">
                                                        <div className="start"></div>
                                                        <div className="rate"></div>
                                                    </div>
                                                </div>
                                                    <ProductActions item = {item}/> 
                                            </div>
                                        ))}
                                    </Slider>
                                </div >
                                <a style={{textDecoration:"none"}} onClick={() => {nav("iphone")}}><ViewMore /></a>
                            </div>
                        </div>
                    </>)
                    :
                    (<><Skeleton /></>)
            }
        </>
    )
}
export default BoxIphone
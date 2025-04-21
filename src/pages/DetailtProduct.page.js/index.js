import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/getDetailProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../styles/scss/detailProduct.scss";
import { ShoppingOutlined, TagOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import {addToOrder } from "../../actions/order"
import { notification } from "antd";

function DetailtProduct() {
    const params = useParams();
    const name = params.name;
    const dispatch = useDispatch();
    const index = parseInt(params.index);
    const [data, setData] = useState(null);
    const [selectedGb, setSelectedGb] = useState(0);
    // console.log(selectedGb)
    const fetchApi = async () => {
        const res = await getDetailProduct(name, index);
        setData(res);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data);
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleSelected = (index) => {
        setSelectedGb(index);
    };
    const nav = useNavigate();
    const cart = useSelector(state => state.cartReducer);
    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.url === data.url)) {
            dispatch(updateQuantity(data.url))
        } else {
            dispatch(addToCart(data.url, data))
        }
    }
    const handleAddToOrder = () => {
        dispatch(addToOrder(data));
        nav("/order")
    };
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
          message: 'Thông báo!',
          description:
            'Thêm vào giỏ hàng thành công!',
          duration: 2,
        });
      };
    return (
        <>
        {contextHolder}
            {data ? (
                <>
                    <div className="detail mt-20">
                        <div className="container">
                            <div className="detail__name">{data.name}</div>
                            <div className="row g-5">
                                <div className="col-7">
                                    <div className="detail__box-left">
                                        <div className="detail__slider mt-40">
                                            <Slider {...settings}>
                                                {data.images.map((item) => (
                                                    <div className="detail__slider-img">
                                                        <img src={item} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className="detail__technology mt-50">
                                            <div className="detail__technology-title">Thông số kỹ thuật</div>
                                            <ul className="detait__technology-content">
                                                {data.tskt.map((item, index) => (
                                                    <li key={index} className={(index + 1) % 2 == 0 ? "gray-content" : ""}>
                                                        <p>{item.name}: </p>
                                                        <div>{item.value}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail__box-right col-4">
                                    <div className="mt-40 detail__capacities">
                                        <div className="">
                                            {
                                                data.capacities.length > 0 ? (<>
                                                    <div className="detail__capacities-title">Các phiên bản dung lượng</div>
                                                    <div className="row g-3">
                                                        {data.capacities.map((item, index) => (
                                                            <div className={index === selectedGb ? "detail__capacities-box col-4 selected" : "detail__capacities-box col-4"} key={index} onClick={() => handleSelected(index)}>
                                                                <div className="detail__capacities-gb">{item.capacity}</div>
                                                                <div className="detail__capacities-price">{item.price.toLocaleString("vi-VN")}đ</div>
                                                                <div className={index === selectedGb ? "icon" : "hidden"} ><TagOutlined /> </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>) : (<>
                                                    <h2>Sản phẩm sắp về hàng</h2>
                                                </>)
                                            }
                                        </div>
                                        {data.capacities.length > 0 ? (<>
                                            <div className="detail__capacities-color mt-20">
                                                <p>Các màu sắc hiện có của: <b>{data.capacities[selectedGb].capacity}</b></p>
                                                <div className="row g-3">
                                                    {data.capacities[selectedGb].color.map((item) => (
                                                        <div className="col-4 detail__capacities-color-item">
                                                            <p>{item.color}</p>
                                                            <div>{item.price.toLocaleString("vi-VN")}đ</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>) : (<></>)}
                                    </div>
                                    <div className="mt-50">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="detail__buyNow" onClick={() => (handleAddToOrder())}><ShoppingOutlined /> MUA HÀNG NGAY</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mt-20 detail__add" onClick={() => (handleAddToCart(), openNotification())}>THÊM VÀO GIỎ HÀNG</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mt-20 detail__hotline">Liên hệ hotline</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
                :
                (<></>)}
        </>
    )
}
export default DetailtProduct;
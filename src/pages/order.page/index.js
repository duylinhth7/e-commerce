import { useSelector } from "react-redux";
import "../../styles/scss/order.scss"
function Order() {
    const order = useSelector(state => state.orderReducer)
    const totalPrice = order.reduce((price, item) => {
        return price += item.info.special_price * item.quantity
    }, 0)
    return (
        <>
            <div className="container">
                <div className="order">
                    <div className="row">
                        <div className="col-7">
                            <div className="order__info row ">
                                <div className="col-12 order__info-title">Thông tin khách hàng</div>
                                <div className="col-7">
                                    <input type="text" placeholder="Họ và tên" />
                                </div>
                                <div className="col-5">
                                    <input type="text" placeholder="Số điện thoại" />
                                </div>
                                <div className="col-6">
                                    <select>
                                        <option>--Tỉnh thành--</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select>
                                        <option>--Quận huyện--</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select>
                                        <option>--Phường xã--</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <input type="text" placeholder="Số nhà, ngõ, đường..." />
                                </div>
                                <div className="col-12">
                                    <textarea rows="6" placeholder="Ghi chú" />
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            {order ? (
                                <>
                                    {
                                        order.map((item, index) => (
                                            <div className="order__product row">
                                                <div className="col-12">
                                                    <div className="order__product-info">
                                                        <div className="order__product-image">
                                                            <img src={item.info.image} />
                                                        </div>
                                                        <div className="order__product-title">
                                                            <p className="name">{item.info.name}</p>
                                                            <p className="quantity">Số lượng: {item.quantity}</p>
                                                            <p className="price">{item.info.special_price ? (<>{item.info.special_price.toLocaleString("vi-VN")}đ</>) : (<>{item.info.price.toLocaleString("vi-VN")}đ</>)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="order__price">
                                        <div className="order__price-title">Tổng tiền</div>
                                        <div className="order__price-info">
                                            <div>Thành tiền</div>
                                            <div className="total-price">{totalPrice.toLocaleString("vi-VN")}đ</div>
                                        </div>
                                        <div>
                                            <button>Thanh Toán</button>
                                        </div>
                                    </div>
                                </>) : (<> </>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Order;
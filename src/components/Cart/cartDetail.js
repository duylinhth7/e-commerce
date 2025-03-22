import { useDispatch, useSelector } from "react-redux";
import "../../styles/scss/cartDetail.scss";
import { deleteProduct } from "../../actions/cart";
function CartDetail() {
    const cart = useSelector(state => state.cartReducer);
    const total = cart.reduce((sum, item) => {
        return sum += item.quantity;
    }, 0);
    const price = cart.reduce((price, item) => {
        return price += item.info.special_price * item.quantity;
    }, 0);
    const dispatch = useDispatch();
    return (
        <>
            <div className="cartDetail">
                <div className="container">
                    {
                        total > 0 ? (<>
                            <div className="cartDetail__title mt-20">Thông tin sản phẩm: <span>{total} sản phẩm</span></div>
                            <div className="cartDetail__table mt-40">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng tiền</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(item => (
                                            <tr>
                                                <td className="cartDetail__name">
                                                    {item.info.name}
                                                </td>
                                                <td className="cartDetail__image">
                                                <img src={item.info.image}/>
                                                </td>
                                                <td className="cartDetail__price">
                                                    {(item.info.special_price).toLocaleString("vi-VN")}đ
                                                </td>
                                                <td className="cartDetail__quantity">{item.quantity}</td>
                                                <td className="cartDetail__total-price">{((item.info.special_price) * (item.quantity)).toLocaleString("vi-VN")}đ</td>
                                                <td className="cartDetail__delete" onClick={() => {dispatch(deleteProduct(item.url))}}>Xóa</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                    <div className=" cartDetail__footer">
                                        <span>Tổng tiền: </span>
                                        <div>{price.toLocaleString("vi-VN")}đ</div>
                                        <button className="col-2">THANH TOÁN</button>
                                    </div>
                                    
                                </div>
                        </>) : (<>
                            <div className="cartDetail__title mt-20">Không có sản phẩm nào trong giỏ hàng</div>
                        </>)
                    }
                </div>
            </div>
        </>
    )
}
export default CartDetail;
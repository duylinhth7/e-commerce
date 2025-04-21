import { DeleteOutlined } from "@ant-design/icons"
import "../../styles/scss/cart.scss";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteProduct } from "../../actions/cart";
import { notification } from "antd";
import { addToOrder } from "../../actions/order";
function Cart({ open, setOpen, data }) {
    const cart = useSelector(state => state.cartReducer);
    const total = cart.reduce((sum, item) => {
        return sum += item.quantity;
    }, 0);
    const price = cart.reduce((price, item) => {
        return price += item.info.special_price * item.quantity;
    }, 0);
    const dispatch = useDispatch();
    const handleAddToOrder = () => {
        dispatch(addToOrder(cart));
        nav("/order");
    }
    // console.log(cart)
    const nav = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
          message: 'Thông báo!',
          description:
            'Xóa khỏi giỏ hàng thành công!',
          duration: 2,
        });
      };
    return (
        <>
        {contextHolder}
            <div className={open ? "overlay" : ""} onClick={() => setOpen(false)}></div>
            <div className={open ? "cart open" : "cart"}>
                <div className="cart__header">
                    <div className="cart__header-title">Giỏ hàng của bạn</div>
                    <div className="cart__header-close" onClick={() => setOpen(false)}>x</div>
                </div>
                <div className="cart__main">
                    {
                        total > 0 ? (
                            <>
                                <ul className="cart__main-list ">
                                    {cart.map((item, index) => (
                                        <li className="cart__main-item mt-10" key={index}>
                                            <div className="cart__main-image">
                                                <img src={item.info.image} />
                                            </div>
                                            <div className="cart__main-info">
                                                <div className="cart__main-name">{item.info.name}</div>
                                                <div className="cart__main-quantity">x {item.quantity}</div>
                                                <div className="cart__main-price">{((item.info.special_price) * item.quantity).toLocaleString("vi-VN")}đ</div>
                                            </div>
                                            <button className="cart__main-delete" onClick={() => dispatch(deleteProduct(item.url), openNotification())}>Xóa</button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cart__footer">
                                    <div className="cart__footer-price">
                                        <span>Tổng tiền:</span>
                                        <div>{price.toLocaleString("vi-VN")}đ</div>
                                    </div>
                                    <div className="cart__footer-btn">
                                        <a onClick={() => (nav("/cart-detail"), setOpen(false))}>Xem giỏ hàng</a>
                                        <a className="mt-10" onClick={() => (handleAddToOrder())}>Thanh toán</a>
                                        <a className="mt-10"onClick={() => (dispatch(deleteAll()), openNotification())}>Xóa tất cả</a>
                                    </div>
                                </div>
                            </>) : (
                            <>
                                <div className="cart__main-null">
                                    <div>
                                        <DeleteOutlined />
                                    </div>
                                    <span>Chưa có sản phẩm nào trong giỏ hàng</span>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Cart;
import {DeleteOutlined} from "@ant-design/icons"
import "../../styles/scss/cart.scss";
function Cart({ open, setOpen, data }) {
    return (
        <>
            <div className={open ? "overlay" : ""} onClick={() => setOpen(false)}></div>
            <div className={open ? "cart open" : "cart"}>
                <div className="cart__header">
                    <div className="cart__header-title">Giỏ hàng của bạn</div>
                    <div className="cart__header-close" onClick={() => setOpen(false)}>x</div>
                </div>
                <div className="cart__main">
                    {
                        data ? (<>ok</>) : (
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
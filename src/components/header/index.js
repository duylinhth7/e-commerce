import { useState } from "react";
import "../../styles/scss/header.scss"
import Search from "../search";
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'; 
import Cart from "../Cart";
import { useSelector } from "react-redux";
;
function Header() {
    const [openCart, setOpenCart] = useState(false);
    const cart = useSelector(state => state.cartReducer);
    const total = cart.reduce((sum, item) => {
        return sum += item.quantity;
    }, 0);
    return (
        <>
            <header className="layoutDefault__header">
                <div className="container">
                    <div className="row">
                        <div className="layoutDefault__header-left col-3">
                            <div className="layoutDefault__header-logo">
                                LOGO
                            </div>
                        </div>
                        <div className="layoutDefault__header-mid col-6">
                            <Search />
                        </div>
                        <div className="layoutDefault__header-right col-3">
                            <div className="mr-20"><HeartOutlined /></div>
                            <div className="mr-20" onClick={() => setOpenCart(true)}>
                                <div className="layoutDefault__header-cart"><ShoppingCartOutlined />
                                    <div>{total}</div>
                                </div>
                            </div>
                            <div><UserOutlined /></div>
                        </div>
                    </div>
                </div>
                <div className="layoutDefault__header-menu">
                    <div className="container">
                        <ul>
                            <li className="checked">iPhone</li>
                            <li>iPhone</li>
                            <li>iPhone</li>
                            <li>iPhone</li>
                            <li>iPhone</li>
                        </ul>
                    </div>
                </div>
                <Cart open={openCart} setOpen={setOpenCart} />
            </header>
        </>
    )
}
export default Header;
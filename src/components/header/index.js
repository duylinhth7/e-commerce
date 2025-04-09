import { useState } from "react";
import "../../styles/scss/header.scss"
import Search from "../search";
import { DownOutlined, FontSizeOutlined, HeartOutlined, ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Drawer, Dropdown } from "antd";
;
function Header() {
    const [openCart, setOpenCart] = useState(false);
    const cart = useSelector(state => state.cartReducer);
    const total = cart.reduce((sum, item) => {
        return sum += item.quantity;
    }, 0);
    const nav = useNavigate();
    const [checked, setChecked] = useState("home");
    const items = [
        {
            key: 1,
            label: (
                <a onClick={() => { nav("/iphone") }}>IPHONE</a>
            )
        },
        {
            key: 2,
            label: (
                <a onClick={() => { nav("/samsung") }}>SAMSUNG</a>
            )
        },
        {
            key: 3,
            label: (
                <a onClick={() => { nav("/oppo") }}>OPPO</a>
            )
        }
    ];
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <header className="layoutDefault__header">
                <div className="container">
                    <div className="row">
                        <div className="layoutDefault__header-left col-3">
                            <div className="layoutDefault__header-logo" onClick={() => { nav("/") }}>
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
                        <div onClick={() => { setOpen(!open) }} className="nav-logo">
                            <UnorderedListOutlined />
                        </div>
                        <ul>
                            <li className={checked == "home" ? "checked" : ""} onClick={() => { setChecked("home"); nav("/") }}>TRANG CHỦ</li>
                            <li style={{ textAlign: "center" }} className={checked == "brand" ? "checked" : ""} onClick={() => { setChecked("brand") }}>
                                <Dropdown overlayClassName="dropdown-custom" menu={{ items }} placement="bottom">
                                    THƯƠNG HIỆU
                                </Dropdown>
                                <DownOutlined style={{ fontSize: '10px' }} />
                            </li>
                            <li className={checked == "info" ? "checked" : ""} onClick={() => { setChecked("info") }} >GIỚI THIỆU</li>
                            <li className={checked == "advise" ? "checked" : ""} onClick={() => { setChecked("advise"); nav("/contact") }} >TƯ VẤN</li>
                            <li className={checked == "contact" ? "checked" : ""} onClick={() => { setChecked("contact"); nav("/contact") }}>LIÊN HỆ</li>
                        </ul>

                        {/* Navbar left */}
                        <Drawer title="MENU" onClose={onClose} open={open}>
                            <ul className="nav-list">
                                <li className={checked == "home" ? "checked" : ""} onClick={() => { setChecked("home"); nav("/"); setOpen(false) }}>TRANG CHỦ</li>
                                <li style={{ textAlign: "center" }} className={checked == "brand" ? "checked" : ""} onClick={() => { setChecked("brand"); setOpen(false) }}>
                                    <Dropdown overlayClassName="dropdown-custom" menu={{ items }} placement="bottom">
                                        THƯƠNG HIỆU
                                    </Dropdown>
                                    <DownOutlined style={{ fontSize: '10px' }} />
                                </li>
                                <li className={checked == "info" ? "checked" : ""} onClick={() => { setChecked("info"); setOpen(false) }} >GIỚI THIỆU</li>
                                <li className={checked == "advise" ? "checked" : ""} onClick={() => { setChecked("advise"); nav("/contact"); setOpen(false) }} >TƯ VẤN</li>
                                <li className={checked == "contact" ? "checked" : ""} onClick={() => { setChecked("contact"); nav("/contact"); setOpen(false) }}>LIÊN HỆ</li>
                            </ul>
                        </Drawer>

                        {/* end navbar left */}
                    </div>
                </div>
                <Cart open={openCart} setOpen={setOpenCart} />
            </header>
        </>
    )
}
export default Header;
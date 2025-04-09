import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/scss/layoutDefault.scss";
import Cart from "../../components/Cart";
import FeaturedBrands from "../../components/featured";
import HighlightList from "../../components/highlightList";
import Footer from "../../components/footer";
import { useEffect } from "react";
import logoZalo from "../../images/zalo.png"
import logoPhone from "../../images/phone.png"

function LayoutDefault() {
    return (
        <>
            <div className="layoutDefault">
                <div className="header">
                    <Header />
                </div>
                <div className="layoutDefault__main">
                    <div className="">
                        <Outlet />
                        <Cart />
                    </div>
                </div>
                <div>
                    <FeaturedBrands />
                </div>
                <div>
                    <HighlightList />
                </div>
                <div className="button-fixed">
                    <ul>
                        <li>
                            <a href="http://zalo.me/0842951626" target="_blank">
                                <img style={{ width: "40px" }} src={logoZalo} />
                            </a>
                        </li>
                        <li>
                            <a href="tel:0842951626">
                                <img style={{ width: "40px" }} src={logoPhone} />
                            </a>
                        </li>
                    </ul>
                </div>
                <footer className="layoutDefault__footer">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/scss/layoutDefault.scss";
import Cart from "../../components/Cart";
import FeaturedBrands from "../../components/featured";
import HighlightList from "../../components/highlightList";
import Footer from "../../components/footer";
import { useEffect } from "react";

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
                    <FeaturedBrands/>
                </div>
                <div>
                    <HighlightList />
                </div>
                <footer className="layoutDefault__footer">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;
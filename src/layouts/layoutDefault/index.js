import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/scss/layoutDefault.scss";
import Cart from "../../components/Cart";

function LayoutDefault() {
    return (
        <>
            <div className="layoutDefault">
                <Header />
                <div className="layoutDefault__main">
                    <div className="container">
                        <Outlet />
                        <Cart />
                    </div>
                </div>

                <footer className="layoutDefault__footer">
                    Footer
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;
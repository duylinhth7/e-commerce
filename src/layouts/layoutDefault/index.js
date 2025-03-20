import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/scss/layoutDefault.scss";

function LayoutDefault() {
    return (
        <>
            <div className="layoutDefault">
                <Header />
                <div className="layoutDefault__main">
                    <div className="container">
                        <Outlet />
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
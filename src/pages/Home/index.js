import Banner from "../../components/banner";
import BoxIphone from "../../components/boxIphone";
import BoxOppo from "../../components/boxOppo";
import BoxSamsung from "../../components/boxSamsung";

import bannerMain from "../../images/banner_video_main.webm"
import "../../styles/scss/home.scss";

function Home() {
    return (
        <>
            <div className="home">
                <div className="home_banner">
                    <div className="home_banner-title">
                        <span>Galaxy A56 | A36 5G</span>
                        <p>Khám phá ngay ưu đãi mua Galaxy A56 | A36 5G mới</p>
                        <button>Tìm hiểu thêm</button>
                    </div>
                    <video autoPlay muted loop>
                        <source src={bannerMain} type="video/mp4"/>   
                    </video>
                </div>
                <div className="mt-20">
                    <BoxIphone />
                </div>
                <div className="mt-20">
                    <BoxSamsung />
                </div>
                <div className="mt-50">
                    <Banner />
                </div>
                <div className="mt-50">
                    <BoxOppo />
                </div>
            </div>

        </>
    )
}
export default Home;
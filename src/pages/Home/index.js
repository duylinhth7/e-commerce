import Banner from "../../components/banner";
import BannerApple from "../../components/bannerApple";
import BoxIphone from "../../components/boxIphone";
import BoxOppo from "../../components/boxOppo";
import BoxSamsung from "../../components/boxSamsung";

import bannerMain from "../../images/banner_video_main.webm"
import "../../styles/scss/home.scss";

function Home() {
    return (
        <>
            <div className="home">
                <div className="home_banner row">
                    <div className="home_banner-title col-xl-12 col-md-6">
                        <span>Galaxy A56 | A36 5G</span>
                        <p>Khám phá ngay ưu đãi mua Galaxy A56 | A36 5G mới</p>
                        <button>Tìm hiểu thêm</button>
                    </div>
                    <video className="col-12" autoPlay muted loop>
                        <source src={bannerMain} type="video/mp4" />
                    </video>
                </div>
                <div className="mt-20">
                    <BoxIphone />
                </div>
                <div className="mt-50">
                    <BannerApple />
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
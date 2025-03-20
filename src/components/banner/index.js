import banner from "../../images/bannerMain.webp"
import bannerRight1 from "../../images/banner-right-1.webp"
import bannerRight2 from "../../images/banner-right-2.webp"
import bannerRight3 from "../../images/banner-right-3.webp"
import "../../styles/scss/banner.scss";
function Banner(){
    return(
        <>
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="banner-right">
                            <img src={banner} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="banner-left">
                            <img src={bannerRight1}/>
                        </div>
                        <div className="banner-left">
                            <img src={bannerRight2}/>
                        </div>
                        {/* <div className="banner-left">
                            <img src={bannerRight3}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner;
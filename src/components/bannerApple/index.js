import bannerApple1 from "../../images/banner-main-apple.webp"
import bannerApple2 from "../../images/banner-iphone-2.webp"
function BannerApple(){
    return(
        <>
            <div className="banner_apple">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="banner_apple-image" style={{textAlign:"right"}}>
                                <img src={bannerApple1}style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="banner_apple-image"style={{textAlign:"left"}}>
                                <img src={bannerApple2} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BannerApple;
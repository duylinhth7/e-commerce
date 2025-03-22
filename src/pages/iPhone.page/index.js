import bannerIphone1 from "../../images/banner-iphone-1.png";
import bannerIphone2 from "../../images/banner-iphone-2.png";
import { useEffect, useState } from "react"
import "../../styles/scss/iphonePage.scss";
import { getListApple } from "../../services/getListProducts";
import ProductActions from "../../components/productActions";
function IphonePage() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getListApple();
        setData(res);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data)


    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="page-banner">
                                <img src={bannerIphone1} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="page-banner">
                                <img src={bannerIphone2} />
                            </div>
                        </div>
                    </div>
                    <div className="page-title mt-40">
                        <div className="page-name">Tất cả sản phẩm <span>iPhone</span></div>
                        <div className="page-dir" ></div>
                    </div>

                    {data ? (<>
                        <div className="page-list mt-50">
                            <div className="row row-cols-5">
                                {data.map((item, index) => (
                                    <div className="page-item" key={index}>
                                        <div className="page-image">
                                            <img src={item.image} />
                                        </div>
                                        <div className="page-info">
                                            <div className="page-names">{item.name}</div>
                                            <div className="page-price">
                                                <div className="new">
                                                    {item.special_price.toLocaleString("vi-VN")}đ
                                                </div>
                                                <div className="old">
                                                    {item.old_price.toLocaleString("vi-VN")}đ
                                                </div>
                                            </div>
                                        </div>
                                        <ProductActions item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>) :
                        (<>Không có sản phẩm nào</>)}
                </div>
            </div>
        </>
    )
}
export default IphonePage;
import bannerIphone1 from "../../images/banner-iphone-1.png";
import bannerIphone2 from "../../images/banner-iphone-2.png";
import { useEffect, useState } from "react"
import "../../styles/scss/iphonePage.scss";
import { getListApple } from "../../services/getListProducts";
import ProductActions from "../../components/productActions";
import { Skeleton } from 'antd';
import { useNavigate } from "react-router-dom";
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
    const nav = useNavigate();


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
                            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                                {data.map((item, index) => (
                                    <div className="page-item" key={index} onClick={()=> (nav(`/detail/${item._id}`))}>
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
                                            <div className="inner-rate">
                                                <div className="start"></div>
                                                <div className="rate"></div>
                                            </div>
                                        </div>
                                        <ProductActions item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>) :
                        (<><Skeleton paragraph={{ rows: 5 }} /></>)}
                </div>
            </div>
        </>
    )
}
export default IphonePage;
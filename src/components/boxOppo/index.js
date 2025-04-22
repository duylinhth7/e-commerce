import { useEffect, useState } from "react";
import { getListOppo } from "../../services/getListProducts";
import ProductActions from "../productActions";
import ViewMore from "../viewMore";
import { useNavigate } from "react-router-dom";
import "../../styles/scss/boxOppo.scss"

function BoxOppo() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getListOppo();
        setData(res.slice(1, 11));
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const nav = useNavigate();
    const handleClick = (id) => {
        nav(`/detail/${id}`);
    };
    return (
        <>
            {data ? (
                <>
                    <div className="container">
                        <div className="box-title">
                            <div className="inner-title">Oppo</div>
                            <div className="inner-dir"></div>
                        </div>
                        <div className="box__oppo row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                            {data.map((item, index) => (
                                <div key={index} className="box__oppo-item" onClick={() => { handleClick(item._id) }}>
                                    <div className="box__oppo-image">
                                        <img src={item.image} alt={item.name} loading="lazy" />
                                    </div>
                                    <div className="box__oppo-info">
                                        <div className="box__oppo-name">{item.name}</div>
                                        <div className="box__oppo-price">
                                            <div className="new">{item.special_price ? (<>{item.special_price.toLocaleString("vi-VN")}</>) : (<>{item.price.toLocaleString("vi-VN")}</>)}đ</div>
                                            <div className="old">{item.old_price ? (<>{item.old_price.toLocaleString("vi-VN")}đ</>) : (<></>)}</div>
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
                        <div className="mt-40" onClick={() => { nav("/oppo") }}>
                            <ViewMore />
                        </div>
                    </div>
                </>
            )
                :
                (<> </>)}
        </>
    )
}
export default BoxOppo;
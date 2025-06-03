import { useEffect, useState } from "react";
import "../../styles/scss/boxSamsung.scss"
import { getListSamsung } from "../../services/getListProducts";
import ViewMore from "../viewMore";
import { useNavigate } from "react-router-dom";
import ProductActions from "../productActions";

function BoxSamsung() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getListSamsung();
        setData(res.slice(0, 10));
    };
    const nav = useNavigate();
    const handleClick = (id) => {
        nav(`/detail/${id}`);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data)
    return (
        <>
            {data ? (
                <>
                    <div className="container">
                        <div className="box-title">
                            <div className="inner-title">SamSung</div>
                            <div className="inner-dir"></div>
                        </div>
                        <div className="box__samsung row  row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                            {data.map((item, index) => (
                                <div key={index} className="box__samsung-item" onClick={() => { handleClick(item._id) }}>
                                    <div className="box__samsung-image">
                                        <img src={item.image} alt={item.name} loading="lazy" />
                                    </div>
                                    <div className="box__samsung-info">
                                        <div className="box__samsung-name">{item.name}</div>
                                        <div className="box__samsung-price">
                                            <div className="new">{item.special_price.toLocaleString("vi-VN") || item.price.toLocaleString("vi-VN")}đ</div>
                                            <div className="old">{item.old_price.toLocaleString("vi-VN") || ""}đ</div>
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
                        <div className="mt-40" onClick={() => { nav("/samsung") }}>
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
export default BoxSamsung;
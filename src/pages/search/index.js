import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchSevices } from "../../services/search";
import ProductActions from "../../components/productActions";
import "../../styles/scss/searchDetail.scss";

function Search() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [sortKey, setSortKey] = useState(null);
    const [sortValue, setSortValue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(" ");
    const nav = useNavigate();

    const fetchApi = async () => {
        setLoading(true); // Bắt đầu loading
        const res = await searchSevices(params.keyword, sortKey, sortValue);  // Truyền sortKey và sortValue vào API
        setData(res);
        setLoading(false); // Kết thúc loading
    };
    // Hàm xử lý sự kiện khi người dùng chọn sắp xếp
    const handleSort = (key, value, selected) => {
        setSortKey(key);
        setSortValue(value);
        setSelected(selected);
    };
    useEffect(() => {
        fetchApi();
    }, [params.keyword, sortKey, sortValue]);  // Thêm sortKey và sortValue vào dependency array



    return (
        <>
            {loading ? (
                <div class="loading-container">
                    <div class="loading-spinner"></div>
                </div>

            ) : (
                <>
                    {data.length > 0 ? (
                        <>
                            <div className="search_detail">
                                <div className="container">
                                    <div className="row"></div>
                                    <div className="page-title mt-40">
                                        <div className="page-name">
                                            Kết quả tìm kiếm cho: <span>{params.keyword}</span>
                                        </div>
                                        <div className="page-dir"></div>
                                    </div>
                                    <div className="search_detail-sort">
                                        <h4>Sắp xếp theo</h4>
                                        <div className="sort_list">
                                            <div className={selected == " " ? "selected sort_list-item" : "sort_list-item default"} onClick={() => handleSort(' ', 'asc', " ")}>
                                                Liên quan
                                            </div>
                                            <div className={selected == "desc" ? "selected sort_list-item" : "sort_list-item default"} onClick={() => handleSort('special_price', 'desc', "desc")}>
                                                Giá cao
                                            </div>
                                            <div className={selected == "asc" ? "selected sort_list-item" : "sort_list-item default"} onClick={() => handleSort('special_price', 'asc', "asc")}>
                                                Giá thấp
                                            </div>
                                        </div>
                                    </div>

                                    <div className="page-list mt-50">
                                        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
                                            {data.map((item, index) => (
                                                <div className="page-item" key={index} onClick={() => nav(`/detail/${item._id}`)} >
                                                    <div className="page-image">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="page-info">
                                                        <div className="page-names">{item.name}</div>
                                                        <div className="page-price">
                                                            <div className="new">
                                                                {item.price ? (
                                                                    <>
                                                                        {item.price.toLocaleString("vi-VN")}đ
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {item.special_price.toLocaleString("vi-VN")}đ
                                                                    </>
                                                                )}
                                                            </div>
                                                            <div className="old">
                                                                {item.price ? <></> : <>{item.old_price.toLocaleString("vi-VN")}đ</>}
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
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container">
                                <div className="page-name" style={{padding: "50px 0"}}>
                                    Không tìm thấy kết quả cho: <span>{params.keyword}</span>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default Search;

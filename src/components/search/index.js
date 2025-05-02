import { useNavigate } from "react-router-dom";
import "../../styles/scss/search.scss"
import {
    SearchOutlined
} from '@ant-design/icons';
import { useEffect, useState } from "react";
import { searchSevices } from "../../services/search";
function Search() {
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.target[0].value;
        nav(`/search/${keyword}`);
    };
    const [suggest, setSuggest] = useState(null);
    const handleKeyUp = async (e) => {
        const keyword = e.target.value;
        if (keyword) {
            const data = await searchSevices(keyword);
            setSuggest(data)
        } else {
            setSuggest(null)
        }
    };
    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <div className="search__input">
                    <input type="text" onKeyUp={handleKeyUp} placeholder="Bạn đang tìm kiếm sản phẩm gì..." />
                </div>
                <button type="submit" className="search__submit">
                    <SearchOutlined />
                </button>
                <div className="search_suggest">
                    <div className="suggest_list">
                        {suggest ? (<>
                            {
                                suggest.slice(0,3).map((item, index) => (
                                    <div className="suggest-item" key={index} onClick={() => (nav(`/detail/${item._id}`, setSuggest(null)))}>
                                        <div className="suggest-image">
                                            <img src={item.image}/>
                                        </div>
                                        <div className="suggest-info">
                                            <div className="suggest-name">
                                                {item.name}
                                            </div>
                                            <div className="suggest-price">
                                                {item.special_price ? (<>{item.special_price.toLocaleString()}đ</>) : (<>{item.price.toLocaleString()}đ</>)}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>)
                            :
                            (<></>)}
                    </div>
                </div>
            </form>
        </>
    )
}
export default Search;
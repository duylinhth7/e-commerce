import { useNavigate } from "react-router-dom";
import "../../styles/scss/search.scss"
import {
    SearchOutlined
} from '@ant-design/icons';
function Search() {
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.target[0].value;
        nav(`/search/${keyword}`)
    }
    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <div className="search__input">
                    <input type="text" placeholder="Bạn đang tìm kiếm sản phẩm gì..." />
                </div>
                <button type="submit" className="search__submit">
                    <SearchOutlined />
                </button>
            </form>
        </>
    )
}
export default Search;
import "../../styles/scss/search.scss"
import {
    SearchOutlined
} from '@ant-design/icons';
function Search() {
    return (
        <>
            <div className="search">
                <div className="search__input">
                    <input type="text" placeholder="Bạn đang tìm kiếm sản phẩm gì..." />
                </div>
                <div className="search__submit">
                    <SearchOutlined />
                </div>
            </div>
        </>
    )
}
export default Search;
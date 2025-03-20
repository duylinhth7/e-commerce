import { DownOutlined } from '@ant-design/icons';
import "../../styles/scss/viewMore.scss";
function ViewMore() {
    return (
        <>
            <div className="text-center mt-20">
                <a className='view-more'>
                    <span>Xem thêm</span>
                    <i><DownOutlined /></i>
                </a>
            </div>
        </>
    )
}
export default ViewMore;
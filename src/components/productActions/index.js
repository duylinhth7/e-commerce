import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'; 
import "../../styles/scss/productActions.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../../actions/cart';
import { notification } from 'antd';

function ProductActions(props) { 
    const {item} = props;
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        if(cart.some(itemCart => itemCart.url === item.url)){
            dispatch(updateQuantity(item.url, item))
        } else {
            dispatch(addToCart(item.url, item))
        }
    };
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
          message: 'Thông báo!',
          description:
            'Thêm vào giỏ hàng thành công!',
          duration: 0,
        });
      };
    
    return(
        <>
        {contextHolder}
        <div className="action">
            <a onClick={() => (handleAddToCart(), openNotification())}><ShoppingCartOutlined /></a>
            <a><HeartOutlined /></a>
        </div>
        </>
    )
}
export default ProductActions;
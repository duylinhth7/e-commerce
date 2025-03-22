import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'; 
import "../../styles/scss/productActions.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../../actions/cart';

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
    }
    return(
        <>
        <div className="action">
            <a onClick={() => handleAddToCart()}><ShoppingCartOutlined /></a>
            <a><HeartOutlined /></a>
        </div>
        </>
    )
}
export default ProductActions;
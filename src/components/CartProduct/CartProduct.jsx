import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cartproduct.module.css';
import { deleteProductFromCart } from '../../redux/cart/cartSlice';

const CartProduct = () => {
    const products = useSelector(state => state.cart.productsCart)
    const dispatch = useDispatch()
    const handleDeleteClick = (productId) => {
        dispatch(deleteProductFromCart(productId))
    }

    return (
        <div>
            {products.map((product) => {
                return (
                    <article className={styles.wrapper}>
                        <img src={product.img} alt="" className={styles.img} />
                        <p className={styles.name}>{product.title}</p>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.quantity}>{product.quantity}</p>
                        <p className={styles.subtotal}>{product.quantity * product.price}</p>
                        <button onClick={() => {handleDeleteClick(product._id)}}><img src="images/delete-icon.png" alt="" />delete</button>
                    </article>
        );
      })}
            
        </div>
    );
};

export default CartProduct;
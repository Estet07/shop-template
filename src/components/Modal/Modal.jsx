import React from "react";
import { useSelector } from "react-redux";
import styles from "./modal.module.css";

const Modal = () => {
  const products = useSelector(state => state.cart.productsCart)
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className={styles.wrapper}>
      {products.map(product => {
        console.log(product);
        return (
          <div className={styles.content}>
        <img
          src="/images/basket-close-icon.png"
          alt=""
          className={styles.close}
        />
        <h2 className={styles.title}>Shopping Cart</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src={product.img} alt="" />
            <div className={styles.info}>
              <h5 className={styles.name}>{product.title}</h5>
              <p>{product.price}</p>
            </div>
            <img src="/images/close-icon.png" alt="" />
          </div>
        </div>
        <div className={styles.bottom}>
        <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal</p> Rs. {totalPrice}
        </div>
        <div className={styles.line}></div>
            <a href="/cart" className={styles.link}>View Cart</a>
            <a href="/checkout" className={styles.link}>Checkout</a>
        </div>
      </div>
        );
      })}
      
    </div>
    )
};

export default Modal;

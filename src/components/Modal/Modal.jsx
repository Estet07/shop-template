import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../redux/cart/cartSlice";
import styles from "./modal.module.css";

const Modal = () => {
  const products = useSelector((state) => state.cart.productsCart);
  console.log(products);
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      {products.map((product) => {
        return (
          <div className={styles.content}>
            <img
              src="/images/basket-close-icon.png"
              alt=""
              className={styles.close}
              onClick={() => dispatch(closeModal())}
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
              <Link
                to="/cart"
                className={styles.link}
                onClick={() => dispatch(closeModal())}
              >
                View Cart
              </Link>
              <a href="/checkout" className={styles.link}>
                Checkout
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;

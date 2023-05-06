import React from "react";
import styles from "./header.module.css";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartQuantity = useSelector(state => state.cart.quantityCart)
  const activeClass = ({ isActive }) => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link;
  };
  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <NavLink to="/" className={activeClass}>Home</NavLink>
            <NavLink to="/auth" className={activeClass}>Account</NavLink>
            <NavLink to="/store" className={activeClass}>Shop</NavLink>
            <NavLink to="/contacts" className={activeClass}>Contacts</NavLink>
          </nav>
          <div className={styles.icons}>
            <a href="/" className={styles.icon}>
              <img src="/images/profile-icon.png" alt="" className={styles.icon}/>
            </a>
            <p className={styles.icon}>
              <img src="/images/search-icon.png" alt="" className={styles.icon}/>
            </p>
            <p className={styles.icon}>
              <img src="/images/favorite-icon.png" alt="" className={styles.icon}/>
            </p>
            <NavLink to="/cart" className={styles.icon}>
            {cartQuantity > 0 &&<span className={styles.quantity}>{cartQuantity}</span>}
              <img src="/images/basket-icon.png" alt="" className={styles.icon}/>
            </NavLink>
            {/* <p className={styles.icon}>
              <span className={styles.quantity}>1</span>
              <img
                src="/images/basket-icon.png "
                alt=""
                className={styles.icon}
              />
            </p> */}
          </div>
          { cartQuantity > 0 && <Modal /> }
        </div>
      </header>
    </>
  );
};

export default Header;

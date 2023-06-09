import React, { useState } from 'react';
import styles from './checkout.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  style: {
    base: {
      color: "black",
      fontSize: "24px",
      "::placeholder" : {
        color: "black"
      }
    } 
  }
}

const CheckoutForm = () => {
  const sum = useSelector(state => state.cart.sum)
  const products = useSelector(state => state.cart.productsCart)
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.post("https://whispering-river-87788.herokuapp.com/api/create-payment-intent", {
      total: sum
    })
      .then(res => setClientSecret(res.data.clientSecret))
  }, [])

  const pay = (e) => {
    e.preventDefault()
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(res => {
      if (res.error) {
        alert(res.error.message);
      } else {
        alert("оплата прошла успешно")
        navigate("/store");
      }
      console.log(res)
    })
  }
  
    return (
      <>
      <Breadcrumbs />
      <h1>Сумма оплаты: {sum}:</h1>
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={pay}>
        <div>
          <CardElement options={cardStyle} />
        </div>
        <button type='submit'>Pay</button>
      </form>
        <div className={styles["product-wrapper"]}>
        <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
        {products.map(product => (
            <div key={product.id}>
              <p className={styles["product-name"]}> {product.title} - {product.price} X {product.quantity} шт. <span>{product.price * product.quantity}</span> </p>
            </div>
            ))}
            <p className={styles["product-total"]}> Total  <span>{sum}</span> </p>
          </div>
      </div>
      </>
    );
};

export default CheckoutForm;
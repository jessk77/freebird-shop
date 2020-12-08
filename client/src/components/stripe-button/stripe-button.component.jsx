import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HsAmnBkmo7xFUM7zE2HQVAEing3Q11AcTb28nXNjcX2GwjDdc6JOpA1pDzZABNcB4xQTVxEerFyGWuXQyCPIFAN00X4FLC6Md';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment successful");
    }).catch(error => {
      console.log('Payment Error: ',JSON.parse(error));
      alert("There was an issue with your payment. Please sure use the provided credit card");
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='FREEBIRD Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://s3-us-west-1.amazonaws.com/jessverduzco.com/atomikod/shop_logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
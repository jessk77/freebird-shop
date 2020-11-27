import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HsAmnBkmo7xFUM7zE2HQVAEing3Q11AcTb28nXNjcX2GwjDdc6JOpA1pDzZABNcB4xQTVxEerFyGWuXQyCPIFAN00X4FLC6Md';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
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
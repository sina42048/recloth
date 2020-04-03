import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey  = 'pk_test_V21dIIsYEAacjSR6IcJLyCiw00mpRS0VXw';
    
    const onToken = token => {
        console.log(token);
        alert('Success');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Clothing Shop"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
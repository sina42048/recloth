import React from 'react';
import { CartItemContainer, ItemDetails, ItemImage, ItemName, ItemPrice } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt={name}/>
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <ItemPrice>
                ${price} x ${quantity}
            </ItemPrice>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;
import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer, ItemName, ItemQuantityContainer, Arrow, ItemQuantity, ItemPrice, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={cartItem.imageUrl} alt={cartItem.name}/>
        </ImageContainer>
        <ItemName>{cartItem.name}</ItemName>
        <ItemQuantityContainer>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
                <ItemQuantity>{cartItem.quantity}</ItemQuantity>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
        </ItemQuantityContainer>
        <ItemPrice>{cartItem.price}</ItemPrice>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, ItemImage, CollectionFooter, ItemName, ItemPrice } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => (
    <CollectionItemContainer>
        <ItemImage imageUrl={item.imageUrl} />
        <CollectionFooter>
            <ItemName>{ item.name }</ItemName>
            <ItemPrice>{ item.price }</ItemPrice>
        </CollectionFooter>
        <CustomButton onClick={ () => addItem(item) } inverted>ADD TO CART</CustomButton>
    </CollectionItemContainer>
)

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
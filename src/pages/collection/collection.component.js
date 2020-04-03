import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionContainer, Title, ItemsContainer } from './collection.styles';


const CollectionPage = ({ collection }) => {
    if( collection === void 0 ) {
        return (
            <div>Somthing went wrong</div>
        )
    }

    return (
    <CollectionContainer>
        <Title>{collection.title}</Title>
        <ItemsContainer>
            {
                collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </ItemsContainer>
    </CollectionContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
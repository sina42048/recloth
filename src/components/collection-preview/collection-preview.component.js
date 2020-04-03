import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, PreviewContainer, Title } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title>{ title.toUpperCase() }</Title>
        <PreviewContainer>
            {
                items.length > 0
                ? items
                .filter((item, idx) => idx < 4)
                .map(( item ) => (
                    <CollectionItem key={ item.id } item={ item } />
                ))
                :
                <div>Nothing to show</div>
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;
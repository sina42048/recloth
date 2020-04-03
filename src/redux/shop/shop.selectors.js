import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    shop => shop.collections ? Object.keys(shop.collections).map(key => shop.collections[key]) : null
)

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectShop],
        shop => shop.collections ? shop.collections[collectionUrlParam] : null
    )
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
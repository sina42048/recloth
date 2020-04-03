import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());

        collectionRef.onSnapshot(async snapShot => {
            const collectionMap = convertCollectionSnapShotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }, error => dispatch(fetchCollectionsFailure(error)));
    }
}
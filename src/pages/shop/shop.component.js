import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { Container } from './shop.styles';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchCollectionsStartAsync(); 
    }

    render() {
        return (
            <Container>
                <Route exact path={`${this.props.match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/>}/>
                <Route exact path={`${this.props.match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/>}/>
            </Container>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
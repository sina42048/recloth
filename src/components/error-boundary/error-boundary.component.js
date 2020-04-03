import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer } from './error-boundary.styles'


class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        return console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" />
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
} 

export default ErrorBoundary;
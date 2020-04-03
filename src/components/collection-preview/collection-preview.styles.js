import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    
    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;
import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
        
        @media screen and (max-width: 800px) {
          display: block;
          opacity: 0.9;
          min-width: unset;
          padding: 0 10px;
        }
    }

    &:hover {  
        button {
          opacity: 0.85;
          display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 90vw;
        margin: 10px 0;

        &:hover {
          button {
            opacity: unset;
          }
        }
    }
`;

export const ItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-image: ${(props) => ( `url(${props.imageUrl})` )};
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const ItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const ItemPrice = styled.span`
    width: 10%;
`;
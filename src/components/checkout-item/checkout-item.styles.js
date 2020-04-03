import styled, { css } from 'styled-components';


export const Shared = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        font-size: 12px;
        padding: 0;
    }
`;

export const ImageContainer = styled.div`
    ${Shared}
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ItemName = styled.span`
    ${Shared},
`;

export const ItemPrice = styled.span`
    ${Shared}
`;

export const ItemQuantityContainer = styled.span`
    ${Shared},
    padding-left: 20px;
    display: flex;
`;

export const ItemQuantity = styled.div`
    padding: 0 10px;
`;

export const Arrow = styled.span`
    cursor: pointer;
`;

export const RemoveButton = styled.a`
    padding-left: 12px;
    cursor: pointer;
`;

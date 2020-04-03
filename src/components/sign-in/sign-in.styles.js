import styled from 'styled-components';

export const SignInContainer = styled.div`
    width : 380px;
    display: flex;
    flex-direction: column;


    @media screen and (max-width: 940px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Title = styled.h2``;

export const SubTitle = styled.span`
    margin: 10px 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 940px) {
        flex-direction: column;
        width: 100%;
    }

`;

export const FormContainer = styled.form``;
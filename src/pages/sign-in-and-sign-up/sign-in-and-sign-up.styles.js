import styled from 'styled-components';

export const Container = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 940px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
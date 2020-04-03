import styles from 'styled-components';

const HomePageContainer = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    
    @media screen and (max-width: 940px) {
        padding: 0;
        justify-content: center;
    }
`;

export default HomePageContainer;
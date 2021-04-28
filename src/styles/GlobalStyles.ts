import styled from 'styled-components';

export const StyledPage = styled.section`
    height: 84.5vh;
    width: 100%;
    /* background: pink; */
`;

export const GlobalStyles = styled.div`
    * {
        &:focus {
            outline: 1.5px solid orange;
        }
    }
    max-width: 1800px;
    background: #fff;
    /* border: 1px solid green; */
    & * {
        max-width: 1800px;
    }
    .display_none {
        display: none;
    }
    .flex {
        display: flex;
    }
    .flex-col {
        display: flex;
        flex-direction: column;
    }
`;

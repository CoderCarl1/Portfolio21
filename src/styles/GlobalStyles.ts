import styled from 'styled-components';

export const StyledPage = styled.section`
    height: 84.5vh;
    width: 100%;
    /* background: pink; */
`;

export const GlobalStyles = styled.div`
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
    .menu_down {
        animation: menu_down_animation 0.3s ease-out forwards;
    }
    .menu_up {
        animation: menu_up_animation 0.3s 0.2s ease-in forwards;
    }
    @keyframes menu_down_animation {
        from {
            transform: translateY(-100vh);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes menu_up_animation {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100vh);
        }
    }
`;

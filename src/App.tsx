import * as React from 'react';
// import { Switch, Route } from 'react-router-dom';
//components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
//styles
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
const { useState } = React;
// type MenuState {
//     menu: boolean
// }

const Main = styled.main`
    min-height: 85vh;
    width: 100%;
    background-image: radial-gradient(
            circle at 93% 91%,
            rgba(249, 249, 249, 0.11) 0%,
            rgba(249, 249, 249, 0.11) 33.333%,
            rgba(211, 211, 211, 0.11) 33.333%,
            rgba(211, 211, 211, 0.11) 66.666%,
            rgba(140, 116, 116, 0.11) 66.666%,
            rgba(140, 116, 116, 0.11) 99.999%
        ),
        radial-gradient(
            circle at 74% 82%,
            rgba(240, 240, 240, 0.17) 0%,
            rgba(240, 240, 240, 0.17) 33.333%,
            rgba(223, 223, 223, 0.17) 33.333%,
            rgba(223, 223, 223, 0.17) 66.666%,
            rgba(205, 205, 205, 0.17) 66.666%,
            rgba(205, 205, 205, 0.17) 99.999%
        ),
        radial-gradient(
            circle at 79% 0%,
            rgba(198, 198, 198, 0.16) 0%,
            rgba(198, 198, 198, 0.16) 33.333%,
            rgba(157, 157, 157, 0.16) 33.333%,
            rgba(157, 157, 157, 0.16) 66.666%,
            rgba(0, 0, 0, 0.16) 66.666%,
            rgba(0, 0, 0, 0.16) 99.999%
        ),
        linear-gradient(255deg, rgb(38, 16, 178), rgb(4, 0, 21));
    /* background: red; */
`;

const App: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    return (
        <GlobalStyles>
            <Navigation setNavOpen={setNavOpen} navOpen={navOpen} />
            {!navOpen && (
                <Main>
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </Main>
            )}
        </GlobalStyles>
    );
};

export default App;

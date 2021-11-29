import Head from 'next/head';
import { Box } from '@chakra-ui/layout';
import { Children } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate Project  </title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
              <NavBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>

);

export default Layout;
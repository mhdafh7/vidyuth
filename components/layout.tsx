import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;

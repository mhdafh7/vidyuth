import Navbar from './Navbar';
import Footer from './Footer';
import Particle from './Particle';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                justifyContent: 'space-between',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <Particle />
            <main style={{ zIndex: 10 }}>{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;

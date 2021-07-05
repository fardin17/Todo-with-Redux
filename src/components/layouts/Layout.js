import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <div className="App">
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;
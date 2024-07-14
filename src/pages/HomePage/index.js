import styles from './HomePage.module.css';
import { Outlet } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';

const HomePage = function () {
    return (
        <main>
            <Header />
            <Outlet  />
            <Footer />
        </main>
    )
}

export default HomePage
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button'
import logo from './logo.png'

const Header = function () {

    return (
        <header className={styles.cabecalho}>
            <>
                <Link to="./">
                    <img className={styles.logo} src={logo} alt="LogoAluraFlix" />
                </Link>

                <nav className={styles.menu}>
                    <Button condition="true" url="./" >
                        HOME
                    </Button>
                    <Button condition="true" url="./addvideo" >
                        NOVO VIDEO
                    </Button>
                </nav>
            </>
        </header>
    )
}

export default Header
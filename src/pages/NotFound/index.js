import styles from './NotFound.module.css';
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = function () {
    return (
        <section className={styles.container}>
            <FaExclamationTriangle className={styles.icone}/>
            <h2>Ops! <br/> O conteúdo que você procura não foi encontrado!</h2>
        </section>
    )
}

export default NotFound
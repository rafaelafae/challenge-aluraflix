import styles from './BoxShadow.module.css'

const BoxShadow = function ({ categoria }) {
    
    return (

        <div className={styles.boxShandow} style={{ color: categoria }}></div>
    )
}

export default BoxShadow
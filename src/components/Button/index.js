import styles from './Button.module.css'
import { Link, useLocation } from 'react-router-dom'

export const Button = ({ url, children }) => {

    const paginaAtual = useLocation()

    let classeBotao = ''

    if (paginaAtual.pathname === '/') {
        if(url === './') {
            classeBotao = styles.botaoDestacado
        } else { classeBotao = styles.botao }
    } else if (paginaAtual.pathname === '/addvideo') {
            if(url === './addvideo') {
                classeBotao = styles.botaoDestacado
            } else { classeBotao = styles.botao }
        } else classeBotao = styles.botao

    return (
        <Link to={url} className={classeBotao}>
            {children}
        </Link>
    )
}

export const FormButton = ({type, children}) => {
    const classeBotao = type === 'submit' ? styles.botaoDestacado : styles.botao;
    return (
        <button className={classeBotao} type={type}>{children}</button> 
    )
}

     
import styles from './FormFields.module.css'

const FormFields = function (
    { tipo, maxlength, minlength, placeholder, label, valor, obrigatorio = false, aoAlterado }
) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.campo} >
            <label>{label}</label>
            <input
                className={styles.campoInput}
                type={tipo}
                minLength={minlength}
                maxLength={maxlength}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default FormFields
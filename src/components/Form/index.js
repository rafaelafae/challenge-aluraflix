import styles from './Form.module.css';
import { useState } from 'react';
import { API } from "API"
import { FormButton } from 'components/Button';
import fetch from 'cross-fetch';
import DropdownList from 'components/DropdownList';
import FormFields from 'components/FormFields';
import TextBox from 'components/TextBox';

const Form = function ({ aoCadastrar, categorias }) {

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        imagem: '',
        link: '',
        categoria: '',
    })

    const limparFormulario = () => {
        setFormData({
            titulo: '',
            descricao: '',
            imagem: '',
            link: '',
            categoria: '',
        })
    }

    const aoSalvar = async (evento) => {
        evento.preventDefault()
        try {
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                console.log('Vídeo cadastrado com sucesso!')
                alert('Vídeo cadastrado com sucesso!')
                limparFormulario()
                aoCadastrar(formData)
            }
        } catch (error) {
            console.error('Erro na requisição:', error)
            alert('Erro no cadastro!')
        }
    }

    return (
        <form onSubmit={aoSalvar} onReset={limparFormulario} className={styles.formulario} >
            <div className={styles.cabecalho}>
                <h1>Novo vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </div>

            <div className={styles.sessaoCampos}>
                <h2>Criar Card</h2>
                <div className={styles.campos}>
                    <FormFields
                        obrigatorio={true}
                        label="Título"
                        placeholder="Insira o título"
                        valor={formData.titulo}
                        aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
                        tipo="text"
                        minLength="3"
                        maxLength=""
                    />

                    <DropdownList
                        obrigatorio={true}
                        label="Categoría"
                        placeholder="Selecione uma categoía..."
                        itens={categorias}
                        valor={formData.categoria}
                        aoAlterado={(valor) => setFormData({ ...formData, categoria: valor })}

                    />

                    <FormFields
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="URL da imagem"
                        valor={formData.imagem}
                        aoAlterado={(valor) => setFormData({ ...formData, imagem: valor })}
                        tipo="url"
                    />

                    <FormFields
                        obrigatorio={true}
                        label="Vídeo"
                        placeholder="URL do vídeo"
                        valor={formData.link}
                        aoAlterado={(valor) => setFormData({ ...formData, link: valor })}
                        tipo="url"
                    />

                    <TextBox
                        obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={formData.descricao}
                        aoAlterado={(valor) => setFormData({ ...formData, descricao: valor })}
                        tipo="text"
                        minLength="10"
                        maxLength="250"
                    />

                </div>
                <div className={styles.botoes}>
                    <FormButton
                        children="Guardar"
                        type='submit'
                    />
                    <FormButton
                        children="Limpar"
                        type='reset'
                    />
                </div>
            </div>
        </form>
    )
}

export default Form

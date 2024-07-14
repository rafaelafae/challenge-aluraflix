import styles from './ModalEdit.module.css'
import { useEffect, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md"
import { FormButton } from 'components/Button'
import TextBox from 'components/TextBox'
import FormFields from 'components/FormFields'
import DropdownList from 'components/DropdownList'

const ModalEdit = function ({ video, aoFechar, aoSalvar, aoFecharModal, categorias }) {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [link, setLink] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo)
            setDescricao(video.descricao)
            setLink(video.link)
            setImagem(video.imagem)
            setCategoria(video.categoria)
        } else {
            setTitulo('');
            setDescricao('');
            setLink('');
            setImagem('');
            setCategoria('');
        }
    }, [video])

    const submit = (event) => {
        event.preventDefault();
        const videoAtualizado = {
            id: video.id,
            titulo,
            descricao,
            link,
            imagem,
            categoria
        }
        aoSalvar(videoAtualizado)
        aoFecharModal()
    }

    return (
        <>
            {video && <>
                <div className={styles.overley} />
                <dialog open={!!video} className={styles.modal}>
                    <MdOutlineCancel onClick={aoFecharModal} className={styles.iconeFechar} />
                    <h1>Editar card</h1>
                    <form onSubmit={submit} method="dialog">
                        <div className={styles.sessaoCampos}>
                            <div className={styles.campos}>
                                <FormFields className={styles.campoModal}
                                    obrigatorio={true}
                                    label="Título"
                                    placeholder="Insira o título"
                                    valor={titulo}
                                    aoAlterado={valor => setTitulo(valor)}
                                />

                                <DropdownList
                                    obrigatorio={true}
                                    label="Categoría"
                                    placeholder="Selecione uma categoía..."
                                    itens={categorias}
                                    valor={categoria}
                                    aoAlterado={valor => setCategoria(valor)}
                                />

                                <FormFields
                                    obrigatorio={true}
                                    label="Imagem"
                                    placeholder="URL da imagem"
                                    valor={imagem}
                                    aoAlterado={valor => setImagem(valor)}
                                />

                                <FormFields
                                    obrigatorio={true}
                                    label="Vídeo"
                                    placeholder="URL do vídeo"
                                    valor={link}
                                    aoAlterado={valor => setLink(valor)}
                                />

                                <TextBox
                                    obrigatorio={true}
                                    label="Descrição"
                                    placeholder="Sobre o que é esse vídeo?"
                                    valor={descricao}
                                    aoAlterado={valor => setDescricao(valor)}
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
                </dialog>
            </>}
        </>
    )
}

export default ModalEdit

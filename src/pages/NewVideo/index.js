import styles from './NewVideo.module.css';
import { API } from 'API';
import { useEffect, useState } from 'react';
import categorias from '../../json/categorias.json';
import Form from 'components/Form';

const NewVideo = function () {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, []);

    const adicionarNovoVideo = (novoVideo) => {
        setVideos((prevVideos) => [...prevVideos, novoVideo]);
    }

    return (
        <Form
            className={styles.sessaoFormulario}
            aoCadastrar={adicionarNovoVideo}
            categorias={categorias.map((categoria) => categoria.nome)}
        />
    )
}

export default NewVideo

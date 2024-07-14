import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from 'API';
import NotFound from 'pages/NotFound';

function Player() {

    const [video, setvideo] = useState();
    const parametros = useParams();
    useEffect(() => {
        fetch(`${API}?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setvideo(...dados)
            })
    }, [parametros.id]);

    if (!video) {
        return (<NotFound />);
    }
    return (
        <section className={styles.conteudo}>
            <h1 className={styles.titulo}>{video.titulo}</h1>
            <p className={styles.descricao}>{video.descricao}</p>
            <div className={styles.containerVideo}>
                <iframe className={styles.video}
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="" ></iframe>
            </div>
        </section>
    )
}

export default Player
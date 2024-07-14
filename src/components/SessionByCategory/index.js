import styles from './SessionByCategory.module.css'
import Video from 'components/Video'

const SessionByCategory = function ({ videos, categoria, aoCadastrar, aoDeletar, aoEditar, aoVerVideo, aoTopo }) {
    return (
        (videos.length > 0) && <section className={styles.categoria}>
            <h3 style={{ backgroundColor: categoria.cor }}>
                {categoria.nome}
            </h3>
            <div className={styles.videos}>
                {videos.map((video, indice) => {
                    return <Video
                        className={styles.videos}
                        video={video}
                        key={indice}
                        categoria={categoria}
                        aoCadastrar={aoCadastrar}
                        aoDeletar={aoDeletar}
                        aoEditar={aoEditar}
                        aoVerVideo={aoVerVideo}
                        aoTopo = {aoTopo}
                    />
                })}
            </div>
        </section>
    )
}

export default SessionByCategory
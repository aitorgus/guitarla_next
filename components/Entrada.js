import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {
    //Aplico Destructuring
    const {titulo,resumen,imagen, published_at,id,url} = entrada
  return (
      <article>
          <Image priority="true" layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />
          
          <div className={styles.contenido}>
              <h3>{titulo}</h3>
              <p className={styles.fecha}>{formatearFecha(published_at)}</p>
              <p className={styles.resumen}>{resumen}</p>
              <Link href={`/blog/${url}`}> 
                  <a className={styles.enlace}>Leer Entrada</a>
                    
              </Link>
          </div>
          
    </article>
  )
}

export default Entrada
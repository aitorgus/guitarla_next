import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/blog.module.css'

const Blog = ({entradas}) => {
  
  
  return (
     <Layout pagina='Blog'>
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>

        <div className={styles.blog}>{entradas.map(entrada => (
          <Entrada key={entrada.id} entrada={entrada}/>
        ))}</div>
       </main>
      </Layout>
  )
}

{/*Esta función no se ejecuta en el cliente (navegador), sino en el servidor */}
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return {
    props: {
      entradas
    }
  }
}


export default Blog
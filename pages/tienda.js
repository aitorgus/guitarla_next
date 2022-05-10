import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({ guitarras }) => {
  console.log(guitarras)
  return (
     <Layout pagina='Tienda Virtual'>
      
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección de Guitarras</h1>
        <Listado guitarras={guitarras} />
      </main>
      </Layout>
  )
}
export async function getServerSideProps() {
  {/*Existe un filtro en Strapi '_sort=created_at:desc -> Los ordena de forma descendente */}
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc` 
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()


  console.log(guitarras)
  return {
    props: {
      guitarras

    }
  }

}
export default Tienda
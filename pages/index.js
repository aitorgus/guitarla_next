import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
export default function Home({guitarras,curso}) {
  return (
  
      <Layout pagina='Inicio'>
        
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>

        <Listado
        guitarras={guitarras}/>
      </main>
      <Curso
        curso={curso}
      />
      </Layout>
    
  )
}
export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc` 
  const urlCursos = `${process.env.API_URL}/cursos` 

/*Con Promise.All, ambas consultas se harán al mismo tiempo, pero en el orden descrito*/
  const [resGuitarras,resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [guitarras,curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])


  
  return {
    props: {
      guitarras,
      curso

    }
  }

}

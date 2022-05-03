import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
      <div>
          <Head> <title>GuitarLA - {pagina}</title>
          <meta name="description" content="Sitio Web de venta de guitarras"></meta>
          </Head>

          <Header/>
          {children}
          
            <Footer/>
      
      
      </div>
  )
}

export default Layout
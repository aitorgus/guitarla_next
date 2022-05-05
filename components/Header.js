import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
      <header className={styles.header}>
          <div className="contenedor">
              {/*Por defecto el src de Image, iniciaría en public */}
              <div className={styles.barra}>
                <Link href="/">
                      <a>
                        <Image width={400} height={100} src="/img/logo.svg" alt="logo-guitarra"></Image>
                      </a>
                </Link>  
              <nav className={styles.navegacion}>
                  <Link href="/">Inicio</Link>
                  <Link href="/nosotros">Nosotros</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/tienda">Tienda</Link>
              </nav>
                </div>
              
          </div>
    </header>
  )
}

export default Header
import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({ guitarra }) => {
    const { descripcion, imagen, nombre, precio, url } = guitarra;
    
  return (
      <div>
          <Image layout='responsive' width={500} height={350} src={imagen.url} alt={`imagen guitarra ${nombre}`} />
          <div>
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
              <p>${precio}</p>

              <Link href={`/guitarras/${url}`}>
                  Ver producto
              </Link>
          </div>
      </div>
  )
}

export default Guitarra
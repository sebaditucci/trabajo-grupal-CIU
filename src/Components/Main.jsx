import React from 'react'
import Separador from './Separador'
import styles from '../Styles/main.module.css'
import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'

export default function Main() {
  return (
    <main>
        <section className = {styles.enlaces}>
            <button className = {styles.enlace}>Productos</button>
            <button className = {styles.enlace}>Fabricantes y Componentes</button>
        </section>
        <Separador />
        <section id = "Historia" className = {styles.historiaContainer}>
            <h2 className = {styles.titulos}>Nuestra Historia</h2>
            <div className = {styles.wrapper}>
                <div className = {styles.imagenes}>
                    <img src = {imagen1} alt = "imagen del local" title = "imagen" className = {styles.imagen}/>
                    <img src = {imagen2} alt = "imagen del local" title = "imagen" className = {styles.imagen} />
                </div>
                <div className = {styles.textoHistoria}>
                    <p>
                        TechManu fue fundada en 1995 por un equipo de ingenieros y emprendedores apasionados por la tecnología y el potencial de la
                        manufactura avanzada. En sus inicios, TechManu era un pequeño taller con una visión clara: revolucionar la industria de la
                        manufactura mediante la integración de tecnología y procesos eficientes.
                    </p>
                    <p>
                        En la primera década, la empresa experimentó un crecimiento constante gracias a su compromiso con la innovación y la calidad.
                        En el año 2001, TechManu obtuvo su primera certificación ISO 9001, lo que consolidó su reputación como proveedor confiable de
                        productos de alta calidad en mercados nacionales. Este logro motivó la expansión de sus instalaciones y permitió a la empresa
                        competir en nuevos mercados. Durante esta etapa, se introdujeron las primeras líneas de producción automatizadas, un hito que
                        significó un avance significativo en términos de eficiencia y precisión.
                    </p>
                    <p>
                        A lo largo de la década de 2010, TechManu continuó su transformación digital al incorporar sistemas de inteligencia artificial y
                        robótica en su cadena de producción. La empresa se centró en la implementación de prácticas de manufactura esbelta y sostenible,
                        lo que le permitió reducir los tiempos de producción y disminuir el desperdicio. En 2020, TechManu recibió un reconocimiento por su
                        compromiso con el medio ambiente, habiendo logrado reducir sus emisiones de carbono en un 70%. Hoy en día, la empresa no solo es un
                        líder en manufactura avanzada, sino que también es un ejemplo de sostenibilidad en la industria.
                    </p>
                </div>    
                <div className = {styles.imagenes}>
                    <img src = {imagen3} alt = "imagen del local" title = "imagen" className = {styles.imagen}/>
                    <img src = {imagen1} alt = "imagen del local" title = "imagen" className = {styles.imagen}/>
                </div>
            </div>
        </section>
        <div className = {styles.imagenFija} alt = "imagen de la empresa" title = "imagen de la empresa"></div>
        <section id = "Filosofia" className = {styles.filosofiaContainer}>
            <h2 className = {styles.titulos}>Nuestra Filosofía</h2>
            <p>
                La filosofía de TechManu se basa en tres pilares fundamentales: calidad, innovación y sostenibilidad. Estos valores han guiado a la
                empresa desde sus primeros días y continúan siendo la base de todas sus decisiones estratégicas.
            </p>
            <ul>
                <li className = {styles.li}>
                    <p>
                        <span className = {styles.span}>Calidad:</span> En TechManu, creemos que la calidad no es solo una característica del producto, sino un compromiso con
                        nuestros clientes. Cada pieza que producimos pasa por un riguroso control de calidad, garantizando que cumpla con los
                        estándares más altos. Para nosotros, la calidad no es negociable, y es lo que nos ha ganado la confianza de nuestros
                        clientes y socios comerciales.
                    </p>
                </li>
                <li className = {styles.li}>
                    <p>
                        <span className = {styles.span}>Innovación:</span> La industria de la manufactura está en constante evolución, y en TechManu estamos comprometidos a
                        liderar esa transformación. La innovación no solo se encuentra en nuestras tecnologías de producción, sino también en la
                        forma en que gestionamos y optimizamos nuestros recursos. Nuestra inversión en investigación y desarrollo es constante,
                        con el objetivo de ofrecer soluciones de manufactura de vanguardia que respondan a las necesidades cambiantes del mercado.
                    </p>
                </li>
                <li className = {styles.li}>
                    <p>
                        <span className = {styles.span}>Sostenibilidad:</span> TechManu está comprometida con el bienestar del planeta y de las generaciones futuras. Hemos
                        integrado prácticas sostenibles en cada etapa de nuestra cadena de producción, desde el uso de materiales reciclables
                        hasta la implementación de energías renovables en nuestras instalaciones. Nos esforzamos por ser un ejemplo de
                        responsabilidad medioambiental en nuestra industria y buscamos continuamente maneras de reducir nuestro impacto
                        ecológico.
                    </p>
                </li>
            </ul>
            <p>
                Esta filosofía es más que un conjunto de principios para TechManu; es el motor que impulsa cada acción y decisión de la empresa.
                Miramos al futuro con la convicción de que la tecnología y la manufactura pueden coexistir con la sostenibilidad, y estamos
                comprometidos a construir un mundo mejor a través de nuestras operaciones y productos.
            </p>
        </section>
        <iframe className = {styles.video} src="https://www.youtube.com/embed/umvodG7HLnA?autoplay=1&loop=1&playlist=umvodG7HLnA&mute=1" title="Video de YouTube" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <Separador />
        <section className = {styles.contacto}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210020.06909796575!2d-58.77939020658686!3d-34.66572301301528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7a73dcb009d%3A0xe8edde713613dc84!2sSODIMAC!5e0!3m2!1ses!2sar!4v1731813691040!5m2!1ses!2sar"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className = {styles.maps}></iframe>
            <div className = {styles.card}>
                <h3 className = {styles.titulos}>Contáctanos!</h3>
                <p><span className = {styles.span}>Correo: </span><a href = "contacto@tetchmanu.com">contacto@tetchmanu.com</a></p>
                <p><span className = {styles.span}>Teléfono: </span><a href = "tel:+54 9 11 2345 6789">+54 9 11 2345 6789</a></p>
                <p><span className = {styles.span}>Dirección: </span>Calle Ficticia 123, Ciudad de la Innovación.</p>
            </div>
        </section>
    </main>
  )
}

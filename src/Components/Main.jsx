import React from 'react'
import styles from '../Styles/main.module.css'

export default function Main() {
  return (
    <main className = {styles.main}>
        <div id = "Historia" className = {styles.card}>
            <h2 className = {styles.titulos}>Nuestra Historia</h2>
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
        <div id = "Filosofia" className = {styles.card}>
            <h2 className = {styles.titulos}>Nuestra Filosofía</h2>
            <p>
                La filosofía de TechManu se basa en tres pilares fundamentales: calidad, innovación y sostenibilidad. Estos valores han guiado a la
                empresa desde sus primeros días y continúan siendo la base de todas sus decisiones estratégicas.
            </p>
            <ul>
                <li>
                    <p>
                        <b>Calidad:</b> En TechManu, creemos que la calidad no es solo una característica del producto, sino un compromiso con
                        nuestros clientes. Cada pieza que producimos pasa por un riguroso control de calidad, garantizando que cumpla con los
                        estándares más altos. Para nosotros, la calidad no es negociable, y es lo que nos ha ganado la confianza de nuestros
                        clientes y socios comerciales.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Innovación:</b> La industria de la manufactura está en constante evolución, y en TechManu estamos comprometidos a
                        liderar esa transformación. La innovación no solo se encuentra en nuestras tecnologías de producción, sino también en la
                        forma en que gestionamos y optimizamos nuestros recursos. Nuestra inversión en investigación y desarrollo es constante,
                        con el objetivo de ofrecer soluciones de manufactura de vanguardia que respondan a las necesidades cambiantes del mercado.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Sostenibilidad:</b> TechManu está comprometida con el bienestar del planeta y de las generaciones futuras. Hemos
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
        </div>

    </main>
  )
}

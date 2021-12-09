import React from 'react'
import './blog.css'

function Blog() {
    return (
        <div className="blog">
            <div className="articulo">
            <p>Por Kourt Zihni. Publicado el 01/12/2021.</p>
            <h1>Cambio climático: sabor amargo</h1>
            <p>El cambio climático afecta el sabor del café: un estudio conjunto de las universidades Tufts y Montana,
                 en los Estados Unidos, comprobó que el calentamiento global está alterando el gusto, el aroma y la calidad
                  general del café (lo que se conoce como sus propiedades organolépticas). Y esto ya está pasando.
                   Con el aumento de las temperaturas, se están perjudicando las cosechas en altura, que son las que mejor calidad tienen:
                    en las cimas de montañas o volcanes, donde se cultiva café a casi 2.000 metros sobre el nivel del mar, el tiempo está
                     cada vez menos fresco y esto provoca plantas de peor calidad y, en consecuencia, bebidas con menos gusto. 
                     Ya están trabajando en proyectos amplios de relocalización de fincas y en sistemas de protección del sol, 
                     pero este diagnóstico se suma al pronóstico más preocupante: si no se revierte el calentamiento global, 
                     para el año 2080 el mundo podría quedarse sin café. 
            </p>
        </div>
        <div className="foto">
            <img src={require(`../../images/Granos.jpg`).default} alt="Granos de café" />
        </div>
        </div>
    );
  }
  
  export  {Blog}

import React, { Component } from "react";
import "./News.scss";

import "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-block">
          <div className="news-1">
            <a
              href="https://www.lasexta.com/noticias/ciencia-tecnologia/el-plastico-ya-no-es-basura-un-novedoso-proyecto-permite-montar-talleres-de-reciclaje-en-casa_201809025b8c0fac0cf207e3d8def81a.html"
              target="blank"
            >
              <h1>
                El plástico ya no es basura: un novedoso proyecto permite montar
                talleres de reciclaje en casa
              </h1>
            </a>
            <h3>
              Gran parte del plástico que se tira acaba en el mar. Contra esta
              situación, 'Precious Plastic' propone ver el plástico como un
              material valioso, en lugar de como basura. Este novedoso proyecto
              permite montar talleres de reciclaje de plástico casero.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159589/bolsas.jpg "
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-2">
            <a
              href="https://elpais.com/ccaa/2018/12/08/catalunya/1544295594_845260.html"
              target="blank"
            >
              <h1>Tu basura en el mar; mi obra de arte en la tierra</h1>
            </a>
            <h3>
              El festival Drap-Art recicla desechos del Mediterráneo para
              concienciar sobre la sostenibilidad de los océanos.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159344/beach.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-3">
            <a
              href="https://www.20minutos.es/noticia/3447881/0/espana-no-cumple-reciclaje-union-europea/#xtor=AD-15&xts=467263"
              target="blank"
            >
              <h1>
                España probablemente no cumpla con los objetivos de reciclaje
                que establece la Unión Europea para 2020
              </h1>
            </a>
            <h3>
              Los Estados miembros deben reciclar el 50% de sus residuos antes
              de 2020. La Comisión Europea llevará a cabo planes de actuación
              para que se cumpla con la legislación.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159331/latas.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-4">
            <a
              href="https://www.abc.es/natural/vivirenverde/abci-crean-envase-futuro-reciclable-compostable-y-biodegradable-mar-201811230925_noticia.html"
              target="blank"
            >
              <h1>
                Crean el envase del futuro: reciclable, compostable y
                biodegradable en el mar
              </h1>
            </a>
            <h3>
              El laboratorio CircularLab de Ecoembes diseña un nuevo material
              plástico a partir de residuos vegetales con propiedades únicas.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159324/botellas.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-5">
            <a
              href="https://www.elespanol.com/ciencia/ecologia/20181031/aprende-calcular-huella-ecologica/349465601_0.html"
              target="blank"
            >
              <h1>Aprende a calcular tu huella ecológica</h1>
            </a>
            <h3>
              La manera de viajar, comer o calentar la casa son algunas
              actividades diarias que afectan de forma directa al cambio
              climático. Aprende de qué forma calcular tu huella ecológica.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545217556/viaje.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-6">
            <a
              href="https://cnnespanol.cnn.com/video/plastic-whale-recoleccion-basura-canal-amsterdam-portafolio-cnnee/"
              target="blank"
            >
              <h1>
                Plastic Whale combina turismo con la protección del
                medioambiente
              </h1>
            </a>
            <h3>
              La compañía holandesa Plastic Whale implementó una nueva modalidad
              de turismo ambiental. Se trata de paseos por los canales de
              Amsterdam donde los visitantes pueden recoger desechos plásticos.
              Los objetos recolectados son reciclados y usados para la
              construcción de nuevos botes.
            </h3>
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545217564/holanda.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

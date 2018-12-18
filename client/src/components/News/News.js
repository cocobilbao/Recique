import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./News.scss";

import "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-block">
          <div className="news-1">
            <h1>
              El plástico ya no es basura: un novedoso proyecto permite montar
              talleres de reciclaje en casa
            </h1>
            <h3>
              Gran parte del plástico que se tira acaba en el mar. Es uno de los
              mayores problemas medioambientales a los que se enfrenta la
              sociedad actualmente. Contra esta situación, 'Precious Plastic'
              propone ver el plástico como un material valioso, en lugar de como
              basura. Este novedoso proyecto permite montar talleres de
              reciclaje de plástico casero.
            </h3>
            <a href="https://www.lasexta.com/noticias/ciencia-tecnologia/el-plastico-ya-no-es-basura-un-novedoso-proyecto-permite-montar-talleres-de-reciclaje-en-casa_201809025b8c0fac0cf207e3d8def81a.html">
              Ir a la noticia
            </a>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159589/bolsas.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-2">
            <h1>Tu basura en el mar; mi obra de arte en la tierra</h1>
            <h3>
              El festival Drap-Art recicla desechos del Mediterráneo para
              concienciar sobre la sostenibilidad de los océanos.
            </h3>
            <a href="https://elpais.com/ccaa/2018/12/08/catalunya/1544295594_845260.html">
              Ir a la noticia
            </a>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159344/beach.jpg"
              alt="Reciqué"
            />
          </div >
          <br />
          <br />
          <div className="news-3">
            <h1>
            España probablemente no cumpla con los objetivos de reciclaje que establece la Unión Europea para 2020
            </h1>
            <h3>
            Los Estados miembros deben reciclar el 50% de sus residuos antes de 2020. La Comisión Europea llevará a cabo planes de actuación para que se cumpla con la legislación.
            </h3>
            <a href="https://www.20minutos.es/noticia/3447881/0/espana-no-cumple-reciclaje-union-europea/#xtor=AD-15&xts=467263">
              Ir a la noticia
            </a>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159331/latas.jpg"
              alt="Reciqué"
            />
          </div>
          <br />
          <br />
          <div className="news-4">
            <h1>
              Crean el envase del futuro: reciclable, compostable y
              biodegradable en el mar
            </h1>
            <h3>
              El laboratorio CircularLab de Ecoembes diseña un nuevo material
              plástico a partir de residuos vegetales con propiedades únicas.
            </h3>
            <a href="https://www.abc.es/natural/vivirenverde/abci-crean-envase-futuro-reciclable-compostable-y-biodegradable-mar-201811230925_noticia.html">
              Ir a la noticia
            </a>
            <br />
            <br />
            <img
              src="https://res.cloudinary.com/dez8vpdet/image/upload/v1545159324/botellas.jpg"
              alt="Reciqué"
            />
          </div>
        </div>
      </div>
    );
  }
}

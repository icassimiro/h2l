
import ipiranga from "./Images/ipiranga.png";
import vila from "./Images/vila.png";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Construction() {
  return (
    <div className="divfull">
    <div className="divcarousel">
      <AutoplaySlider play={false} cancelOnInteraction={false} interval={12000}>
        
        
        <div className="slide">
        <h2 className="textboard">OBRAS EM ANDAMENTO<hr className="hrr"></hr></h2>
        <div className="carouselflex">

          <img className="slideimg" src={vila} alt=""></img>
          <div className="columnap">
          
          <h2 className="titleap">Vila Prudente II</h2>
        
          
          <h2 className="subtitleap">Localizado em São Paulo, este empreendimento de 28 pavimentos no sistema construtivo parede de concreto com 235 unidades, marca mais um importante passo em nossa trajetória, reforçando nossa parceria com a Metrocasa e reafirmando nosso compromisso em entregar qualidade, solidez e inovação em cada detalhe.</h2>
               <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
          </div>
          
        </div>
        <div className="slide">
     
        <h2 className="textboard">OBRAS EM ANDAMENTO<hr className="hrr"></hr></h2>
        <div className="carouselflex">
 
          <img className="slideimg" src={ipiranga} alt=""></img>
           <div className="columnap">
      
          <h2 className="titleap">Alto do Ipiranga</h2>
          <hr className="hrr"></hr>
          <h2 className="subtitleap">Localizado em São Paulo, este projeto representa o inicio de uma importante parceria com a Metrocasa, e reflete nosso objetivo de construir estruturas sólidas e relacionamentos duradouros. 

Estamos orgulhosos de trabalhar ao lado de uma equipe dedicada para tornar este projeto uma realidade.</h2>
          <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
          </div>
       
        </div>

       
        
       
       
      </AutoplaySlider>
    </div>

    </div>
  );
}
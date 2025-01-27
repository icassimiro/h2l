
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
        <h2 className="textboard">Obras em andamento<hr className="hrr"></hr></h2>
        <div className="carouselflex">

          <img className="slideimg" src={vila} alt=""></img>
          <div className="columnap">
          
          <h2 className="titleap">Vila Prudente II</h2>
        
          
          <h2 className="subtitleap">Em parceria com a Metrocasa, iniciamos mais esse empreendimento em São Paulo. Com [número de unidades] unidades habitacionais e uma área total de [metragem] metros quadrados. Com previsão de entrega para [data de término], este projeto é mais uma demonstração do compromisso da H2L com a inovação e a qualidade em cada etapa da construção.</h2>
               <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
          </div>
          
        </div>
        <div className="slide">
     
        <h2 className="textboard">Obras em andamento<hr className="hrr"></hr></h2>
        <div className="carouselflex">
 
          <img className="slideimg" src={ipiranga} alt=""></img>
           <div className="columnap">
      
          <h2 className="titleap">Alto do Ipiranga</h2>
        
          <h2 className="subtitleap">Localizado em São Paulo, o empreendimento conta com 235 unidades habitacionais e uma área total de [metragem] metros quadrados. Com entrega prevista para [data de término], este projeto reflete o compromisso da H2L com a excelência e a inovação, oferecendo soluções residenciais que atendem às necessidades e expectativas dos seus futuros moradores.</h2>
          <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
          </div>
       
        </div>

       
        
       
       
      </AutoplaySlider>
    </div>

    </div>
  );
}
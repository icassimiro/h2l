
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
        
          
          
          <h2 className="subtitleap">Em parceria com a <strong className="s">Metrocasa</strong>, iniciamos mais esse empreendimento em <strong className="s">São Paulo.</strong> Com <strong className="s">[número de unidades]</strong> unidades habitacionais e uma área total de <strong className="s">[metragem]</strong> metros quadrados. Com previsão de entrega para <strong className="s">[data de término]</strong>, este projeto é mais uma demonstração do compromisso da H2L com a inovação e a qualidade em cada etapa da construção.</h2>
               <a target="_blank" href="https://www.metrocasa.com.br/imoveis/property?id=3247"></a>
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
        
          
          <h2 className="subtitleap">Localizado em <strong className="s">São Paulo</strong>, o empreendimento conta com <strong className="s">235 unidades habitacionais</strong> e uma área total de <strong className="s">[metragem]</strong> metros quadrados. Com entrega prevista para <strong className="s">[data de término]</strong>, este projeto reflete o compromisso da H2L com a excelência e a inovação, oferecendo soluções residenciais que atendem às necessidades e expectativas dos seus futuros moradores.</h2>
          <a target="_blank" href="https://www.metrocasa.com.br/imoveis/property?id=3095">
          <button className="projeto">VISUALIZAR PROJETO</button>
          </a>
          </div>
          </div>
       
        </div>

       
        
       
       
      </AutoplaySlider>
    </div>

    </div>
  );
}
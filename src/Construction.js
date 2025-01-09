import ap from "./Images/ap.jpg";
import ap1 from "./Images/ap1.jpg";
import ap2 from "./Images/ap2.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Construction() {
  return (
    <div className="divcarousel">
      <AutoplaySlider play={false} cancelOnInteraction={false} interval={12000}>
        <div className="slide">
          <img className="slideimg" src={ap} alt=""></img>
          <div className="columnap">
          <h2 className="titleap">AURORA HEIGHTS<hr className="hrr"></hr></h2>
          <h2 className="subtitleap">Descubra a sofisticação do Aurora Heights, onde o horizonte encontra a exclusividade. Localizado na região mais valorizada da cidade, este edifício redefine o conceito de luxo, com acabamentos premium e áreas de lazer.</h2>
          <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
        </div>
        <div className="slide">
          <img className="slideimg" src={ap1} alt=""></img>
          <div className="columnap">
          <h2 className="titleap">ROYAL HORIZON<hr className="hrr"></hr></h2>
          <h2 className="subtitleap">Royal Horizon é uma declaração de estilo. Projetado para oferecer o máximo de conforto e exclusividade, este empreendimento combina amplas áreas sociais, paisagismo sofisticado e um skyline de tirar o fôlego. Viva a realeza em cada detalhe.</h2>
          <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
        </div>
        <div className="slide">
          <img className="slideimg" src={ap2} alt=""></img>
          <div className="columnap">
          <h2 className="titleap">INFINITY TOWER<hr className="hrr"></hr></h2>
          <h2 className="subtitleap">Explore a liberdade do Infinity Tower, onde cada detalhe foi projetado para oferecer aconchego. Com vista panorâmica deslumbrante e espaços projetados para o bem-estar, este edifício representa design e inovação.</h2>
          <button className="projeto">VISUALIZAR PROJETO</button>
          </div>
        </div>
      
       
       
      </AutoplaySlider>
    </div>
  );
}

import City from "./Images/City.mp4";
import goldlogo from "./Images/goldlogo.png";



export default function Background() {
  return (

    <div className="videodiv">
    
    
      <div className="divtextbackground">

        <div className="divlogo">
          <img className="logo" src={goldlogo}></img>
        </div>
        <div className="divtitle">
          <h2 className="titlebackground">Construir estruturas sólidas e relacionamentos duradouros!<hr className="hrr"></hr></h2>
        </div>
        <div className="divsubtitle">
          <h3 className="subtitle">H2L engenharia é uma empresa focada na excelência técnica, operacional, inovação e compromisso com a satisfação de seus clientes, investidores e colaboradores.</h3>
        </div>
        
      
      </div>

      
      
      <video
        className="video"
        controls={false}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
      >
        <source src={City} />
      </video>
      
    </div>

  );
}
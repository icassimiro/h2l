
import City from "./Images/City.mp4";
import whitelogo from "./Images/whitelogo.png";



export default function Background() {
  return (

    <div className="videodiv">
    
    
      <div className="divtextbackground">

        <div className="divlogo">
          <img className="logo" src={whitelogo}></img>
        </div>
        <div className="divtitle">
          <h2 className="titlebackground">Soluções habitacionais que combinam conforto, sustentabilidade e design!<hr className="hrr"></hr></h2>
        </div>
        <div className="divsubtitle">
          <h3 className="subtitle">Nosso compromisso é transformar terrenos em lares, construindo espaços que proporcionem qualidade de vida, segurança e conforto. Cada projeto é desenvolvido com excelência e tecnologia. Construímos mais do que habitações, construímos sonhos.</h3>
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
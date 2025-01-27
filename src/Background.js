
import City from "./Images/City.mp4";
import goldlogo from "./Images/goldlogo.png";



export default function Background() {
  return (

    <div className="videodiv">
    
    
      <div className="divtextbackground">

      
        <div className="divtitle">
          <h2 className="titlebackground">Construir estruturas sólidas e relacionamentos duradouros!<hr className="hrrb"></hr></h2>
          <h2 className="subbackground">Combinando inovação, sustentabilidade e compromisso para superar expectativas em cada projeto.</h2>
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
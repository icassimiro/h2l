import METROCASA from "./Images/METROCASA.png";
import SH from "./Images/SH.png";
import SOLUG from "./Images/SOLUG.png";

export default function Parceiros() {
    return (<div className="logoparceiros">    
    <h2 className="textboardp">Conheça nossos parceiros<hr className="hrrp"></hr></h2>
    <div className="parceirosflex">
        
        <div className="divwhite">
        <img className="parceiro1" src={METROCASA}></img>
        </div>
        <div className="divwhite">
        <img className="parceiro2" src={SH}></img>
        </div>
        <div className="divwhite">
        <img className="parceiro3" src={SOLUG}></img>
        </div>
        </div>
    </div>)
}
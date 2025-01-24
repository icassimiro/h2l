import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import linkedin from "./Images/linkedin.png";


import { FaWhatsapp } from "react-icons/fa";
import certificacoes from "./Images/certificacoes.png";

export default function Infos() {
    return (
        <div className="divflexinfo">
            <div className="infomargin">
            <div className="divinfo">
                <h2 className="siga">Siga-nos</h2>
                <h2 className="infos"><strong className="s">END:</strong> Rua Marquesa de Santos 217  São Paulo - SP<hr className="hrri"></hr></h2>
                <h2 className="infos"><strong className="s">CEP:</strong> 04269-040<hr className="hrri"></hr></h2>
                <h2 className="infos"><strong className="s">TEL:</strong> (21)99384-1466<hr className="hrri"></hr></h2>
                <h2 className="infos"><strong className="s">E-MAIL:</strong> h2lengenharia@gmail.com<hr className="hrri"></hr></h2>
                </div>
                <div className="infogap">
                    <img src={facebook} className="infoiconi"></img>
                    <img src={linkedin} className="infoiconi"></img>
                    <img src={instagram} className="infoiconi"></img>
                 


                </div>
                <button className="wpp">FALE CONOSCO <FaWhatsapp className="iconwpp"/></button>
                </div>
             
            
            <div className="divcert"><img className="cert" src={certificacoes}></img></div>
        </div>)

}
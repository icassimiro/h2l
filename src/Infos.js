import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


import { AiOutlineFacebook } from "react-icons/ai";
import certificacoes from "./Images/certificacoes.png";

export default function Infos() {
    return (
        <div className="divflexinfo">
            <div className="infomargin">
            <div className="divinfo">
                <h2 className="infos">END: Rua Marquesa de Santos 217  São Paulo - SP<hr className="hrri"></hr></h2>
                <h2 className="infos">CEP: 04269-040<hr className="hrri"></hr></h2>
                <h2 className="infos">TEL: (21)99384-1466<hr className="hrri"></hr></h2>
                <h2 className="infos">EMAIL: h2lengenharia@gmail.com<hr className="hrri"></hr></h2>
                </div>
                <div className="infogap">
                    <CiInstagram className="infoiconi" />
                    <CiLinkedin className="infoiconl" />
                    < AiOutlineFacebook className="infoiconf" />


                </div>
                <button className="wpp">FALE CONOSCO <FaWhatsapp className="iconwpp"/></button>
                </div>
             
            
            <div className="divcert"><img className="cert" src={certificacoes}></img></div>
        </div>)

}
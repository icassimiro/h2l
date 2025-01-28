
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";


import { FaWhatsapp } from "react-icons/fa";
import certificacoes from "./Images/certificacoes.png";

export default function Infos() {
    return (
        <div className="divflexinfo">
            <div className="infomargin">
                <div className="divinfo">
                    <h2 className="siga">Siga-nos</h2>
                    <h2 className="infos"><strong className="s">MATRIZ:</strong> Rio de Janeiro - RJ<hr className="hrri"></hr></h2>
                    <h2 className="infos"><strong className="s">FILIAL:</strong> Rua Marquesa de Santos 217  São Paulo - SP<hr className="hrri"></hr></h2>
                    <h2 className="infos"><strong className="s">CEP:</strong> 04269-040<hr className="hrri"></hr></h2>
                    <h2 className="infos"><strong className="s">TEL:</strong> (21)99384-1466<hr className="hrri"></hr></h2>
                    <h2 className="infos"><strong className="s">E-MAIL:</strong> h2lengenharia@gmail.com<hr className="hrri"></hr></h2>
                </div>
                <div className="infogap">
                
                
                    <ImFacebook2 className="infoiconf" />
                
                    <AiFillInstagram className="infoiconi" />
                    <a target="_blank" href="https://www.linkedin.com/company/h2l-engenharia-ltda/about/">
                    <ImLinkedin className="infoiconl" />
                    </a>




                </div>
                <a target="_blank" href="https://api.whatsapp.com/message/N5E5IZXQWDNKD1?autoload=1&app_absent=0">
                <button className="wpp">FALE CONOSCO <FaWhatsapp className="iconwpp" /></button></a>
            </div>


            <div className="divcert"><img className="cert" src={certificacoes}></img></div>
        </div>)

}
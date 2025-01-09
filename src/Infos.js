import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
export default function Infos() {
    return (
        <div className="divinfo">
           
            <div className="infogap">
                <CiInstagram className="infoiconi" />
                <CiLinkedin className="infoiconl" />

        <div className="divbtns">
            <div className="divbtnwpp"><button className="wpp">WHATSAPP<FaWhatsapp className="iconwpp" /></button></div>
            <div className="divbtn"><button className="pdf">APRESENTAÇÃO<FaRegFilePdf className="iconpdf" /></button></div>
            </div>
            </div>
        </div>)

}
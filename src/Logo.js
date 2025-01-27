import wallpaper from "./Images/wallpaper.png";



export default function Logo() {
    return (<div className="divparceiros"><div className="divwallpaper"><img className="wallpaper" src={wallpaper}></img></div><h2 className="parceirostext">Conte com nosso time de <strong className="strong">especialistas</strong> para seu <strong className="strong">empreedimento</strong>!</h2>
        <div className="divinformation">
            <div className="parceirosdescription"> <div className="descripcolumn"><h2 className="description">15K+</h2><h2 className="subdescription">Unidades habitacionais</h2></div></div>
            
            <div className="parceirosdescription"><div className="descripcolumn"> <h2 className="description">R$1,2B+</h2><h2 className="subdescription">Em VGV</h2></div></div>
            <div className="parceirosdescription"><div className="descripcolumn"> <h2 className="description">800K+</h2><h2 className="subdescription">Metros quadrados construídos</h2></div></div>

        </div>
    </div>
    )
}

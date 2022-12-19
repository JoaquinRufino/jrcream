import './App.css';
import producto from '../producto.json';

function Card (){
    return (
    <div className="Card_container">
        
            <div className="article-ropa1 card">
                    <img className='ropa' src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669847364/fotos/sintitulo-36_k1eduh.png"/>
                <div className="div-card">
                    <p className="card-text">Nft exclusive Black Edition Ice cream-Hungry 🔥🔥$2800 </p>
                    <button id={producto.Id} href="#">Comprar</button>
                </div>
            </div>
        
            <div className=" article-ropa card">
                    <img className='ropa-1' src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669847361/fotos/sintitulo-2_denubr.png"/>
                <div className="div-card">
                    <p className="card-text">Nft exclusive Black Edition Ice cream-Hungry 🔥🔥$3500</p>
                    <button id={producto.Id} href="#">Comprar</button>
                </div>
            </div>
        
            <div className="article-ropa2 card">
                    <img className='ropa' src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669847362/fotos/sintitulo-3_jlxvqg.png"/>
                <div className="div-card">
                    <p className="card-text">Nft exclusive Black Edition Ice cream-Hungry 🔥🔥$4200</p>
                    <button id={producto.Id} href="#">Comprar</button>
                </div>
            </div>
        
        
            <div className="article-ropa3 card">
                    <img className='ropa' src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669847361/fotos/sintitulo-40_kyovmw.png"/>
                <div className="div-card">
                    <p className="card-text">Nft exclusive Black Edition Ice cream-Hungry 🔥🔥$2500</p>
                    <button id={producto.Id} href="#">Comprar</button>
                </div>
            </div>
        
        
            <div className="article-ropa2 card">
                    <img className='ropa' src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669847356/fotos/sintitulo-39_ayfose.png"/>
                <div className="div-card">
                    <p className="card-text">Nft exclusive Black Edition Ice cream-Hungry 🔥🔥$3200</p>
                    <button id={producto.Id} href="#" >Comprar</button>
                </div>
            </div>
        
    </div>
    
    );
}

export default Card;
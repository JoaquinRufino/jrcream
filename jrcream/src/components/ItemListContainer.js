import Card from './Card';

function ItemListContainer (){
    return (
    <div className="Home_container">
        <div className="card-importante">
            <div className="carta">
                <p className="text1">Welcome👆👆
                </p>
                <div className="one">
                    <div className="two">
                        <div className="three">
                            <div className="four">
                                <div className="five">
                                    <img className="nft-foto text-2" src="https://res.cloudinary.com/dwbpfsjom/image/upload/v1669846393/IMG_9695-2_yjmppu.jpg" alt="foto nft"></img>
                                    <button className="boton">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Card/>
    </div>
    );
}

export default ItemListContainer;
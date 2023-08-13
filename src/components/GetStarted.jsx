import './GetStarted.css'
const GetStarted = () =>{
    return(
        <section className='g-wrapper'>
            <div className='paddings innerWidth g-container'>
                <div className='flexColCenter inner-container'>
                    <span className='primaryText'>Calculadora de Arroba</span>
                    <span className='secondaryText'>Peso vivo multiplicado pelo rendimento da carcaça em porcentagem, dividido por 15</span>
                    <div className="flexColStart">
                        <div className="flexStart row">
                            <div className="flexColCenter">
                                <div className="flexColStart">
                                    <span className='inputLabel'>Peso vivo(pV)</span>
                                    <input className='inputText'/>
                                </div>                                
                            </div>
                            <div className="flexColStart ">
                                <div className="flexColCenter">
                                    <span className='primaryText mult'>X</span>                                    
                                </div>                                
                            </div>
                            <div className="flexColCenter">
                                <div className="flexColStart">
                                    <span className='inputLabel'>Rendimento da carcaça(RC)%</span>
                                    <input className='inputText'/>
                                </div>                                
                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className='line'></div>
                        </div>
                        <div className="flexColCenter row">
                            <span className='primaryText mult'>15</span>  
                        </div>

                        
                    </div>
                    <button className='button'>
                        <a href="">Calcular</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default GetStarted


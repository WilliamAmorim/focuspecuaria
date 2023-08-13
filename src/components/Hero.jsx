import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerwidth flexCenter hero-container">
                <div className="hero-left">
                    <div className="hero-title">                
                        <h1>Conquiste seu Rebanho dos Sonhos</h1>
                    </div>  
                    <div className="flexColStart hero-des">                
                        <span className=''>A Focus Pecuária é uma Startup que surgiu como o objetivo de ajudar o pequeno e médio
produtor rural. Proporcionando um espaço virtual, seguro, que permite a negociação de
compra e venda de gado entre produtores do ramo. Buscando facilitar e reduzir os custos
existentes na comercialização de gado.</span>
                    </div>  
                    <div className='flexStart stats'>
                        <div className='flexColStart stat'>
                            <span>
                                <span><CountUp start={0} end={9000} duration={4}/></span>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Cliente Feliz</span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <span><CountUp start={0} end={17000} duration={6}/></span>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Produtos de Qualidade</span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <span><CountUp start={0} end={1000} duration={3}/></span>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premiações</span>
                        </div>
                    </div>                         
                </div>
                {/* <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./gado.jpg" alt=""/>
                    </div>
                </div> */}
            </div>   
        </section>
    )
}
export default Hero